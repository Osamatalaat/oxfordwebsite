import { Component, HostListener, OnInit } from '@angular/core';
import { Department } from '../../../core/models/department';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainContent',
  templateUrl: './mainContent.component.html',
  styleUrls: ['./mainContent.component.css'],
  standalone: false
})
export class MainContentComponent implements OnInit {

  departments: Department[] = [];
  isLoading = true;
  error: string | null = null;

  currentIndex = 0;
  itemsPerView = 3;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.updateItemsPerView();
    this.loadDepartments();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateItemsPerView();
  }

  updateItemsPerView(): void {
    const width = window.innerWidth;
    if (width >= 1024) {
      this.itemsPerView = 3;
    } else if (width >= 640) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 1;
    }
  }

  loadDepartments(): void {
    this.isLoading = true;
    this.error = null;
    this.http.get<Department[]>('assets/data/departments.json').subscribe({
      next: (data) => {
        this.departments = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load departments.';
        this.isLoading = false;
      }
    });
  }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.departments.length - this.itemsPerView) {
      this.currentIndex++;
    }
  }

  goToPage(pageIndex: number): void {
    this.currentIndex = pageIndex * this.itemsPerView;
  }

  getPageIndicators(): number[] {
    const pages = Math.ceil(this.departments.length / this.itemsPerView);
    return Array(pages).fill(0).map((_, i) => i);
  }
  getCurrentPage(): number {
  return Math.floor(this.currentIndex / this.itemsPerView);
}


  viewAllDepartments(): void {
    // You can implement navigation or modal logic here
    alert('Viewing all departments');
  }

  onDepartmentClick(department: Department): void {
    // You can implement routing or popup logic
    console.log('Clicked department:', department);
  }

  onImageError(event: Event, department: Department): void {
    const target = event.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=${encodeURIComponent(department.name)}`;
  }
}



