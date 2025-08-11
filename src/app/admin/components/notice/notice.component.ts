import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticeService } from '../../../core/services/notice.service';
import { Notice } from '../../../core/models/notice';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  standalone: false
})
export class NoticeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective; // للتحكم في الرسم

  notices: Notice[] = [];
  paginatedNotices: Notice[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  // Chart Data
  public priorityChartLabels: string[] = ['High', 'Medium', 'Low'];
  public priorityChartData: number[] = [];
  public priorityChartType: ChartConfiguration<'pie'>['type'] = 'pie';

  public priorityChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    animation: {
      duration: 5000, // مدة الأنيميشن
      easing: 'easeOutBounce' // نوع الحركة
    },
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  public priorityChartColors: string[] = [];

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    this.setChartColors(); // Load colors from CSS variables
    this.loadNotices();    // Fetch data and paginate
  }

  // Function to read CSS variables and set chart colors
  private setChartColors(): void {
    const styles = getComputedStyle(document.documentElement);
    const oxfordBlue = styles.getPropertyValue('--color-oxford-blue').trim();
    const midBlue = styles.getPropertyValue('--color-mid-blue').trim();
    const lightBlue = styles.getPropertyValue('--color-light-blue').trim();

    this.priorityChartColors = [oxfordBlue, midBlue, lightBlue];
  }

  // Function to fetch notices and setup pagination
  private loadNotices(): void {
    this.noticeService.getNotices().subscribe((data) => {
      this.notices = data;
      this.totalPages = Math.ceil(this.notices.length / this.pageSize);
      this.paginate();
      this.prepareChartData(); // Prepare chart data after fetching notices
    });
  }

  private prepareChartData(): void {
    const counts = { High: 0, Medium: 0, Low: 0 };
    this.notices.forEach(n => counts[n.priority]++);

    this.priorityChartData = [
      counts.High,
      counts.Medium,
      counts.Low
    ];

    // تحديث الشارت مع الأنيميشن
    this.chart?.update();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedNotices = this.notices.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginate();
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
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getShowingRange(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(start + this.pageSize - 1, this.notices.length);
    return `${start}-${end}`;
  }
}
