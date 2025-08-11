import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-section',
  templateUrl: './static-section.component.html',
  styleUrls: ['./static-section.component.css'],
  standalone: false
})
export class StaticSectionComponent implements OnInit {



    stats = {
    students: 120000,
    faculty: 3500,
    programs: 150,
    ranking: 42,
    research: 850,
    alumni: 90,
    countries: 65,
    awards: 200
  };

  constructor() {}

  ngOnInit(): void {
    // You could fetch stats from an API here if needed
    // this.fetchStatsFromAPI();
  }

  onApplyNow(): void {
    // Example: Redirect to application page
    window.open('https://youruniversity.edu/apply', '_blank');
  }

  onLearnMore(): void {
    // Example: Navigate to a section or page with more info
    window.open('https://youruniversity.edu/about', '_blank');
  }

  // Optional: if you want to fetch stats dynamically
  // private fetchStatsFromAPI(): void {
  //   this.http.get('/assets/data/stats.json').subscribe((data: any) => {
  //     this.stats = data;
  //   });
  // }
}


