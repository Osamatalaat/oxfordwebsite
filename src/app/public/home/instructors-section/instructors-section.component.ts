import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../../core/models/instructor';
import { Department } from '../../../core/models/department';

@Component({
  selector: 'app-instructors-section',
  templateUrl: './instructors-section.component.html',
  styleUrls: ['./instructors-section.component.css'],
  standalone: false
})
export class InstructorSectionComponent implements OnInit {
  instructors: Instructor[] = [];
  departments: Department[] = [];
  filteredInstructors: Instructor[] = [];

  isLoading: boolean = true;
  error: string | null = null;
  selectedDepartment: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.isLoading = true;

    const instructorRequest = this.http.get<Instructor[]>('assets/data/instructors.json');
    const departmentRequest = this.http.get<Department[]>('assets/data/departments.json');

    instructorRequest.subscribe({
      next: (instructorRes) => {
        this.instructors = instructorRes;
        this.filteredInstructors = instructorRes;
      },
      error: () => {
        this.error = 'Failed to load instructors.';
        this.isLoading = false;
      }
    });

    departmentRequest.subscribe({
      next: (departmentRes) => {
        this.departments = departmentRes;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load departments.';
        this.isLoading = false;
      }
    });
  }

  filterByDepartment(departmentId: number): void {
    if (this.selectedDepartment === departmentId) {
      this.selectedDepartment = null;
      this.filteredInstructors = this.instructors;
    } else {
      this.selectedDepartment = departmentId;
      this.filteredInstructors = this.instructors.filter(
        instructor => instructor.departmentId === departmentId
      );
    }
  }

  getDepartmentName(departmentId: number): string {
    const dept = this.departments.find(d => d.id === departmentId);
    return dept ? dept.name : 'Unknown';
  }

  trackByInstructor(index: number, instructor: Instructor): number {
    return instructor.id;
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/default-avatar.png';
  }

  selectInstructor(instructor: Instructor): void {
    console.log('Selected Instructor:', instructor);
    // Add navigation/modal logic if needed
  }

  contactInstructor(instructor: Instructor, event: Event): void {
    event.stopPropagation();
    window.location.href = `mailto:${instructor.email}`;
  }

  viewAllInstructors(): void {
    this.selectedDepartment = null;
    this.filteredInstructors = this.instructors;
  }
}
