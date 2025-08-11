import { Component, OnInit } from '@angular/core';
import { Student } from '../../../core/models/student';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css'],
  standalone: false
})
export class AdminStudentsComponent implements OnInit {

  students: Student[] = [];
  filteredStudents: Student[] = [];
  paginatedStudents: Student[] = [];

  searchTerm: string = '';
  sortOption: string = 'newest';

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;

  selectedStudents = new Set<number>();
  selectAll = false;

  activeActionMenu: number | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredStudents = this.students.filter(student =>
      student.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.sortStudents();
    this.paginate();
  }

  sortStudents(): void {
    switch (this.sortOption) {
      case 'newest':
        this.filteredStudents.sort((a, b) => b.enrollmentYear - a.enrollmentYear);
        break;
      case 'oldest':
        this.filteredStudents.sort((a, b) => a.enrollmentYear - b.enrollmentYear);
        break;
      case 'name':
        this.filteredStudents.sort((a, b) => (a.firstName + ' ' + a.lastName).localeCompare(b.firstName + ' ' + b.lastName));
        break;
      case 'name-desc':
        this.filteredStudents.sort((a, b) => (b.firstName + ' ' + b.lastName).localeCompare(a.firstName + ' ' + a.lastName));
        break;
    }
  }

  paginate(): void {
    this.totalPages = Math.ceil(this.filteredStudents.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedStudents = this.filteredStudents.slice(start, end);
  }

  onSearch(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  toggleStudentSelection(studentId: number): void {
    if (this.selectedStudents.has(studentId)) {
      this.selectedStudents.delete(studentId);
    } else {
      this.selectedStudents.add(studentId);
    }
    this.selectAll = this.paginatedStudents.every(s => this.selectedStudents.has(s.id));
  }

  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.paginatedStudents.forEach(s => this.selectedStudents.add(s.id));
    } else {
      this.paginatedStudents.forEach(s => this.selectedStudents.delete(s.id));
    }
  }

  toggleActionMenu(studentId: number): void {
    this.activeActionMenu = this.activeActionMenu === studentId ? null : studentId;
  }

  closeActionMenu(): void {
    this.activeActionMenu = null;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginate();
      this.selectAll = false;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  getVisiblePages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  getShowingRange(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(start + this.pageSize - 1, this.filteredStudents.length);
    return `${start}-${end}`;
  }

  getInitials(name: string): string {
    const [first, last] = name.split(' ');
    return (first[0] + (last ? last[0] : '')).toUpperCase();
  }

  formatDate(year: number): string {
    return `Enrolled: ${year}`;
  }

  getParentName(student: Student): string {
    return `${student.firstName}'s Parent`;
  }

  callStudent(phone: string): void {
    window.open(`tel:${phone}`, '_blank');
  }

  emailStudent(email: string): void {
    window.open(`mailto:${email}`, '_blank');
  }

  getGradeClass(student: Student): string {
    const gpa = student.gpa;
    if (gpa >= 3.5) return 'bg-[var(--color-green)] text-white';
    if (gpa >= 3.0) return 'bg-[var(--color-orange)] text-white';
    return 'bg-red-100 text-red-600';
  }

  getGradeText(student: Student): string {
    const gpa = student.gpa;
    if (gpa >= 3.5) return 'Excellent';
    if (gpa >= 3.0) return 'Good';
    return 'Average';
  }

  viewStudent(student: Student): void {
    alert(`Viewing details of ${student.firstName} ${student.lastName}`);
  }

  editStudent(student: Student): void {
    alert(`Editing ${student.firstName} ${student.lastName}`);
  }

  deleteStudent(student: Student): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${student.firstName} ${student.lastName}?`);
    if (confirmDelete) {
      this.students = this.students.filter(s => s.id !== student.id);
      this.applyFilters();
    }
  }

  openAddStudentModal(): void {
  // Example logic: Open a modal or set a flag to show the add form
  console.log('Add student modal opened');
  // You can also set a boolean like:
  // this.showAddStudentModal = true;
}
trackByStudentId(index: number, student: Student): number {
  return student.id;
}


}
