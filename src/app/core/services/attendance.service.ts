import { Injectable } from '@angular/core';
import { Attendance } from '../models/attendance';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AttendanceFilter } from '../models/attendancefilter';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceData: Attendance[] = [];
  private filteredDataSubject = new BehaviorSubject<Attendance[]>([]);

  constructor(private http: HttpClient) {
    this.loadAttendanceData();
  }

  private loadAttendanceData(): void {
    this.http.get<Attendance[]>('assets/data/attendance.json').subscribe(
      data => {
        this.attendanceData = data;
        this.filteredDataSubject.next(data);
      }
    );
  }

  getAttendanceData(): Observable<Attendance[]> {
    return this.filteredDataSubject.asObservable();
  }

  filterAttendance(filter: AttendanceFilter): void {
    let filteredData = [...this.attendanceData];

    // Filter by class/program
    if (filter.class && filter.class !== 'all') {
      filteredData = filteredData.filter(record =>
        record.program.toLowerCase().includes(filter.class.toLowerCase())
      );
    }

    // Filter by month
    if (filter.month && filter.month !== 'all') {
      const [year, month] = filter.month.split('-');
      filteredData = filteredData.filter(record => {
        const recordDate = new Date(record.date);
        return recordDate.getFullYear() === parseInt(year) &&
               recordDate.getMonth() === parseInt(month) - 1;
      });
    }

    // Filter by week (assuming week is represented as week number)
    if (filter.week && filter.week !== 'all') {
      // Implementation depends on how you want to handle weeks
      // This is a basic implementation
      const weekNumber = parseInt(filter.week.split('-')[1]);
      filteredData = filteredData.filter(record => {
        const recordDate = new Date(record.date);
        const weekOfMonth = Math.ceil(recordDate.getDate() / 7);
        return weekOfMonth === weekNumber;
      });
    }

    this.filteredDataSubject.next(filteredData);
  }

  updateAttendanceStatus(studentId: number, date: string, status: 'Present' | 'Absent' | 'Late'): void {
    const recordIndex = this.attendanceData.findIndex(
      record => record.studentId === studentId && record.date === date
    );

    if (recordIndex !== -1) {
      this.attendanceData[recordIndex].status = status;
      this.filteredDataSubject.next([...this.attendanceData]);
    }
  }

  getUniqueStudents(): string[] {
    const students = this.attendanceData.map(record => record.studentName);
    return [...new Set(students)];
  }

  getDateRange(): string[] {
    const dates = this.attendanceData.map(record => record.date);
    return [...new Set(dates)].sort();
  }
}
