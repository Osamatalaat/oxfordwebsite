import { Component, OnInit } from '@angular/core';
import { FinanceRecord } from '../../../core/models/financeRecord';
import { FinanceService } from '../../../core/services/finance.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
  standalone: false
})
export class FinanceComponent implements OnInit {
  financeItems: FinanceRecord[] = [];
  filteredFinanceItems: FinanceRecord[] = [];
  paginatedFinanceItems: FinanceRecord[] = [];

  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;


  totalRevenue = 0;
  totalDue = 0;
  chartData: any;
  chartOptions: any;

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.financeService.getFinanceRecords().subscribe((records) => {
      this.financeItems = records;
      // console.log(records)

      this.totalRevenue = records.reduce((sum, r) => sum + r.amountPaid, 0);
      this.totalDue = records.reduce((sum, r) => sum + r.dueAmount, 0);

      this.filteredFinanceItems = [...this.financeItems]; // ✅ Copy all data initially
      this.totalPages = Math.ceil(this.filteredFinanceItems.length / this.pageSize);
      this.paginate();

      // console.log(this.totalRevenue, this.totalDue , this.totalPages);
      this.paginate();

      const targetStudent = this.financeItems.find(s => s.studentName === 'Ahmed Hassan');

      this.chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Monthly Payments - Ahmed Hassan',
            data: targetStudent?.monthlyPayments || [],
            borderColor: '#005ABB',
            backgroundColor: 'rgba(0, 90, 187, 0.2)',
            pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-orange').trim(),
            pointBorderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-orange').trim(),
            pointRadius: 5,          // 👈 Size of the points
            pointHoverRadius: 7,     // 👈 Size on hover
            fill: true,
            tension: 0.1 // zigzag
          }
        ]
      };


      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // This is the key to allow height expansion
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Line Chart: Paid vs Due',
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#002147',
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },
          y: {
            ticks: {
              color: '#002147',
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },

        },
        animation: {
          duration: 5000,
          easing: 'easeInOutQuart'
        }
      };


    });
  }

  paginate(): void {
    this.totalPages = Math.ceil(this.filteredFinanceItems.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedFinanceItems = this.filteredFinanceItems.slice(start, end);
    console.log(this.filteredFinanceItems.length)
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
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  getShowingRange(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(start + this.pageSize - 1, this.filteredFinanceItems.length);
    return `${start}-${end}`;
  }

}
