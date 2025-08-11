import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../../core/models/news';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-newItemDetails',
  templateUrl: './newItemDetails.component.html',
  styleUrls: ['./newItemDetails.component.css'],
  standalone: false
})
export class NewsItemDetailsComponent implements OnInit {
  newsItem: NewsItem | null = null;
  relatedArticles: NewsItem[] = [];
  currentImage: string = '';
  currentImageIndex = 0;
  loading = true;
  error: string | null = null;
  linkCopied = false;



  constructor(
    private newsService: NewsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.DisplayNewsItem(id);
  }

  DisplayNewsItem(id: number): void {


  this.newsService.getNewsById(id).subscribe({
  next: (item) => {
    if (item) {
      this.newsItem = item;
      this.currentImage = item.images?.[0] || '';
      // Then fetch all items again for related articles
      this.newsService.getNews().subscribe(allItems => {
        this.relatedArticles = allItems
          .filter(i => i.id !== item.id && i.category === item.category)
          .slice(0, 4);
      });
    } else {
      this.error = 'The article you are looking for does not exist.';
    }
    this.loading = false;
  },
  error: () => {
    this.error = 'Failed to load news data.';
    this.loading = false;
  }
});

  }

  formatDate(date: string): string {
    const d = new Date(date);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  goBack(): void {
    this.location.back();
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/800x400?text=Oxford+News';
  }

  nextImage(): void {
    if (!this.newsItem) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.newsItem.images.length;
    this.currentImage = this.newsItem.images[this.currentImageIndex];
  }

  previousImage(): void {
    if (!this.newsItem) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.newsItem.images.length) % this.newsItem.images.length;
    this.currentImage = this.newsItem.images[this.currentImageIndex];
  }

  selectImage(index: number): void {
    if (!this.newsItem || index < 0 || index >= this.newsItem.images.length) return;
    this.currentImageIndex = index;
    this.currentImage = this.newsItem.images[index];
  }

  shareArticle(platform: string): void {
    const url = window.location.href;
    const text = this.newsItem?.title || 'Check this article out!';

    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.linkCopied = true;
      setTimeout(() => (this.linkCopied = false), 2000);
    });
  }

  navigateToArticle(id: number): void {
    this.router.navigate(['/news', id]);
  }
}
