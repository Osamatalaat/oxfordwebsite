import { Component, OnInit } from '@angular/core';
import { Student } from '../../../core/models/student';
import { StudentService } from '../../../core/services/student.service';
import { Instructor } from '../../../core/models/instructor';
import { InstructorService } from '../../../core/services/instructor.service';

@Component({
  selector: 'app-admin-instructors',
  templateUrl: './admin-instructors.component.html',
  styleUrls: ['./admin-instructors.component.css'],
  standalone: false
})
export class AdminInstructorsComponent implements OnInit {

  instructors: Instructor[] = [];
  filteredInstructors: Instructor[] = [];
  paginatedInstructors: Instructor[] = [];

  searchTerm: string = '';
  sortOption: string = 'department';

  currentPage: number = 1;
  pageSize: number = 8;
  totalPages: number = 0;

  selectedInstructors = new Set<number>();
  selectAll = false;

  activeActionMenu: number | null = null;

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.fetchInstructors();
  }

  fetchInstructors(): void {
    this.instructorService.getInstructors().subscribe((data: Instructor[]) => {
      this.instructors = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredInstructors = this.instructors.filter(instructor =>
      instructor.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.sortInstructors();
    this.paginate();
  }

  sortInstructors(): void {
  switch (this.sortOption) {
    case 'department':
      this.filteredInstructors.sort((a, b) => a.departmentId - b.departmentId);
      break;

    case 'specialization':
      this.filteredInstructors.sort((a, b) => a.specialization.localeCompare(b.specialization));
      break;

    case 'name':
      this.filteredInstructors.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case 'name-desc':
      this.filteredInstructors.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
}


  paginate(): void {
    this.totalPages = Math.ceil(this.filteredInstructors.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedInstructors = this.filteredInstructors.slice(start, end);
  }

  onSearch(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  toggleInstructorSelection(instructorId: number): void {
    if (this.selectedInstructors.has(instructorId)) {
      this.selectedInstructors.delete(instructorId);
    } else {
      this.selectedInstructors.add(instructorId);
    }
    this.selectAll = this.paginatedInstructors.every(s => this.selectedInstructors.has(s.id));
  }

  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.paginatedInstructors.forEach(s => this.selectedInstructors.add(s.id));
    } else {
      this.paginatedInstructors.forEach(s => this.selectedInstructors.delete(s.id));
    }
  }

  toggleActionMenu(instructorId: number): void {
    this.activeActionMenu = this.activeActionMenu === instructorId ? null : instructorId;
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
    const end = Math.min(start + this.pageSize - 1, this.filteredInstructors.length);
    return `${start}-${end}`;
  }

  getInitials(name: string): string {
    const [first, last] = name.split(' ');
    return (first[0] + (last ? last[0] : '')).toUpperCase();
  }

  formatDate(year: number): string {
    return `Enrolled: ${year}`;
  }

      // getParentName(student: Student): string {
      //   return `${student.firstName}'s Parent`;
      // }

  callInstructor(phone: string): void {
    window.open(`tel:${phone}`, '_blank');
  }

  emailInstructor(email: string): void {
    window.open(`mailto:${email}`, '_blank');
  }

    // getGradeClass(instructor: Instructor): string {
    //   const gpa = instructor.gpa;
    //   if (gpa >= 3.5) return 'bg-[var(--color-green)] text-white';
    //   if (gpa >= 3.0) return 'bg-[var(--color-orange)] text-white';
    //   return 'bg-red-100 text-red-600';
    // }

  // getGradeText(instructor: Instructor): string {
  //   const gpa = instructor.gpa;
  //   if (gpa >= 3.5) return 'Excellent';
  //   if (gpa >= 3.0) return 'Good';
  //   return 'Average';
  // }

  viewInstructor(instructor: Instructor): void {
    alert(`Viewing details of ${instructor.name}`);
  }

  editInstructor(instructor: Instructor): void {
    alert(`Editing ${instructor.name}`);
  }

  deleteInstructor(instructor: Instructor): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${instructor.name}?`);
    if (confirmDelete) {
      this.filteredInstructors = this.filteredInstructors.filter(s => s.id !== instructor.id);
      this.applyFilters();
    }
  }

  openAddInstructorModal(): void {
  // Example logic: Open a modal or set a flag to show the add form
  console.log('Add instructor modal opened');
  // You can also set a boolean like:
  // this.showAddInstructorModal = true;
}
trackByInstructorId(index: number, instructor: Instructor): number {
  return instructor.id;
}


}
