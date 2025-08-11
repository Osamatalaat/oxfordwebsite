// import { Component, OnInit } from '@angular/core';
// import { AttendanceService } from '../../../core/services/attendance.service';
// import { Attendance } from '../../../core/models/attendance';
// import { AttendanceFilter } from '../../../core/models/attendancefilter';

// @Component({
//   selector: 'app-admin-attendance',
//   templateUrl: './admin-attendance.component.html',
//   styleUrls: ['./admin-attendance.component.css'],
//   standalone: false
// })
// export class AdminAttendanceComponent implements OnInit {

//  attendanceData: Attendance[] = [];
//   filteredAttendance: Attendance[] = [];
//   // filteredAttendance: AttendanceFilter[] = [];

//   selectedMonth: string = 'April 2024';
//   selectedWeek: string = 'Week 2-3';
//   selectedClass: string = 'Class 11A';

//   currentPage: number = 1;
//   pageSize: number = 5;

//   studentNames: string[] = [];
//   dateColumns: string[] = [];

//   constructor(private attendanceService: AttendanceService) {}

//   ngOnInit(): void {
//     this.fetchAttendance();
//   }

//   fetchAttendance(): void {
//     this.attendanceService.getAttendanceData().subscribe((data: Attendance[]) => {
//       this.attendanceData = data;
//       console.log(data)
//       this.onFilterChange();
//     });
//   }

//   onFilterChange(): void {
//     // Filter logic can be adjusted based on actual class/month/week mappings
//     this.filteredAttendance = this.attendanceData.filter(record =>
//       this.isInSelectedMonth(record.date) ||
//       this.isInSelectedWeek(record.date) ||
//       this.isInSelectedClass(record.studentId)

//     );
//     console.log(this.filteredAttendance);
//     // Build date columns and unique student names
//     this.buildTableStructure();
//     this.currentPage = 1;
//   }

//   isInSelectedMonth(dateStr: string): boolean {
//     const date = new Date(dateStr);
//     const [monthName, year] = this.selectedMonth.split(' ');
//     return (
//       date.toLocaleString('default', { month: 'long' }) === monthName &&
//       date.getFullYear().toString() === year
//     );
//   }

//   isInSelectedWeek(dateStr: string): boolean {
//     // For simplicity, simulate weeks as fixed date ranges
//     const date = new Date(dateStr);
//     const day = date.getDate();
//     if (this.selectedWeek === 'Week 1-2') return day <= 14;
//     if (this.selectedWeek === 'Week 2-3') return day > 7 && day <= 21;
//     if (this.selectedWeek === 'Week 3-4') return day > 14;
//     return true;
//   }

//   isInSelectedClass(studentId: number): boolean {
//     // Simulated: just a hash map based on studentId
//     if (this.selectedClass === 'Class 11A') return studentId % 3 === 0;
//     if (this.selectedClass === 'Class 11B') return studentId % 3 === 1;
//     if (this.selectedClass === 'Class 12A') return studentId % 3 === 2;
//     return true;
//   }

//   buildTableStructure(): void {
//     const dates = new Set<string>();
//     const names = new Set<string>();

//     for (const record of this.filteredAttendance) {
//       names.add(record.studentName);
//       dates.add(record.date);
//     }

//     this.studentNames = Array.from(names).sort();
//     this.dateColumns = Array.from(dates).sort();
//   }

//   getAttendanceStatus(studentName: string, date: string): 'Present' | 'Absent' | 'Late' | '' {
//     const record = this.filteredAttendance.find(
//       r => r.studentName === studentName && r.date === date
//     );
//     return record?.status || '';
//   }

//   updateAttendanceStatus(studentName: string, date: string, newStatus: 'Present' | 'Absent' | 'Late'): void {
//     const record = this.filteredAttendance.find(
//       r => r.studentName === studentName && r.date === date
//     );
//     if (record) {
//       record.status = newStatus;
//       // You could also send this to a backend if needed
//     }
//   }

//   // Pagination Logic
//   getPaginatedStudents(): string[] {
//     const start = (this.currentPage - 1) * this.pageSize;
//     return this.studentNames.slice(start, start + this.pageSize);
//   }

//   get totalPages(): number {
//     return Math.ceil(this.studentNames.length / this.pageSize);
//   }

//   getPageNumbers(): number[] {
//     const total = this.totalPages;
//     const pages: number[] = [];

//     for (let i = 1; i <= total; i++) {
//       pages.push(i);
//     }

//     return pages;
//   }

//   previousPage(): void {
//     if (this.currentPage > 1) this.currentPage--;
//   }

//   nextPage(): void {
//     if (this.currentPage < this.totalPages) this.currentPage++;
//   }

//   goToPage(page: number): void {
//     this.currentPage = page;
//   }
// }




import { Component, OnDestroy, OnInit } from '@angular/core';
import { AttendanceService } from '../../../core/services/attendance.service';
import { Attendance } from '../../../core/models/attendance';
import { AttendanceFilter } from '../../../core/models/attendancefilter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-attendance',
  templateUrl: './admin-attendance.component.html',
  styleUrls: ['./admin-attendance.component.css'],
  standalone: false
})
export class AdminAttendanceComponent implements OnInit , OnDestroy {
  attendanceData: Attendance[] = [];
  students: string[] = [];
  dateColumns: string[] = [];
  attendanceMap: { [key: string]: Attendance } = {};

  // Filter properties
  selectedMonth = 'April 2024';
  selectedWeek = 'Week 2-3';
  selectedClass = 'Class 11A';

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  private subscription: Subscription = new Subscription();

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.attendanceService.getAttendanceData().subscribe(data => {
        this.processAttendanceData(data);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private processAttendanceData(data: Attendance[]): void {
    this.attendanceData = data;

    // Get unique students
    this.students = [...new Set(data.map(record => record.studentName))];

    // Get unique dates and create columns (showing day numbers)
    const uniqueDates = [...new Set(data.map(record => record.date))].sort();
    this.dateColumns = uniqueDates.map(date => {
      const day = new Date(date).getDate().toString().padStart(2, '0');
      return day;
    });

    // Create attendance map for easy lookup
    this.attendanceMap = {};
    data.forEach(record => {
      const key = `${record.studentName}-${record.date}`;
      this.attendanceMap[key] = record;
    });

    // Calculate pagination
    this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
  }

  getAttendanceStatus(studentName: string, dateColumn: string): 'Present' | 'Absent' | 'Late' | null {
    // Convert dateColumn (day) back to full date
    const currentDate = this.getCurrentDateFromColumn(dateColumn);
    const key = `${studentName}-${currentDate}`;
    return this.attendanceMap[key]?.status || null;
  }

  private getCurrentDateFromColumn(dayColumn: string): string {
    // This is a simplified implementation
    // You might need to adjust based on your actual date handling
    const currentYear = 2024;
    const currentMonth = 4; // April
    return `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${dayColumn}`;
  }

  updateAttendanceStatus(studentName: string, dateColumn: string, status: 'Present' | 'Absent' | 'Late'): void {
    const currentDate = this.getCurrentDateFromColumn(dateColumn);
    const student = this.attendanceData.find(record =>
      record.studentName === studentName && record.date === currentDate
    );

    if (student) {
      this.attendanceService.updateAttendanceStatus(student.studentId, currentDate, status);
    }
  }

  onFilterChange(): void {
    const filter: AttendanceFilter = {
      month: this.selectedMonth,
      week: this.selectedWeek,
      class: this.selectedClass
    };
    this.attendanceService.filterAttendance(filter);
  }

  getPaginatedStudents(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.students.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
}
