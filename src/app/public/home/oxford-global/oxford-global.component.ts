import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oxford-global',
  templateUrl: './oxford-global.component.html',
  styleUrls: ['./oxford-global.component.css'],
  standalone: false
})
export class OxfordGlobalComponent {

  // Stats displayed in the footer section
  stats = {
    countries: 50,
    students: 10000,
    successRate: 95
  };

  // Called when "Explore Programs" button is clicked
  onExplorePrograms(): void {
    // You can implement routing or modal opening here
    console.log('Explore Programs button clicked');
    // Example: this.router.navigate(['/programs']);
  }

  // Called when "Learn More" button is clicked
  onLearnMore(): void {
    // You can navigate or trigger modal/info overlay
    console.log('Learn More button clicked');
    // Example: this.router.navigate(['/about']);
  }
}
