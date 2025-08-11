import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../../core/models/news';
import { NewsService } from '../../../core/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: false
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  paginatedNews: NewsItem[] = [];

  categories: string[] = ['All'];
  selectedCategory: string = 'All';

  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 1;

  constructor(private newsService: NewsService , private router: Router) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: NewsItem[]) => {
      this.newsItems = data.map(item => ({
        ...item,
        image: item.images?.[0] || 'https://via.placeholder.com/400x300?text=Oxford+News',
        date: this.getRandomDate()
      }));
      this.categories = ['All', ...Array.from(new Set(this.newsItems.map(item => item.category)))];
      this.applyFilters();
    });
  }

  // Fallback image handler
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/400x300?text=Oxford+News';
  }

  // Format ISO date into readable format
  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Simulate random date (if your JSON lacks real dates)
  getRandomDate(): string {
    const start = new Date(2023, 0, 1).getTime();
    const end = new Date().getTime();
    return new Date(start + Math.random() * (end - start)).toISOString().split('T')[0];
  }

  // Called when a category is selected
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.applyFilters();
  }

  // Filters news by selected category
  applyFilters(): void {
    this.filteredNews = this.selectedCategory === 'All'
      ? this.newsItems
      : this.newsItems.filter(item => item.category === this.selectedCategory);

    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
    this.updatePaginatedNews();
  }

  // Navigate to specific page
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedNews();
  }

  // Returns current page's news
  updatePaginatedNews(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedNews = this.filteredNews.slice(start, end);
  }

  // Generates pagination button numbers
  getPaginationNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


 goToDetails(id: number): void {
  this.router.navigate(['/news', id]);
}
}
