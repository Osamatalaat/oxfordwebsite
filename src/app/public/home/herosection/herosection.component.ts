import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css'],
  standalone: false
})
export class HeroSectionComponent implements OnInit {
  currentSlide: number = 0;
  totalSlides: number = 3; // Change if more slides are added
  dots: any[] = [];
  selectedDegreeType: string = 'undergraduate';
  searchQuery: string = '';
  autoSlideInterval: any;
  searchPlaceholder: string = 'Search undergraduate Degree Program...';
   backgroundImages: string[] = [
    'assets/images/oxford/oxford1.jpg',
    'assets/images/oxford/oxford2.jpg',
    'assets/images/oxford/oxford3.jpg',
    'assets/images/oxford/oxford4.jpg',
    'assets/images/oxford/oxford5.jpg'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dots = Array(this.backgroundImages.length).fill(0);
    this.startAutoSlide();
  }



updatePlaceholder(): void {
  const map: { [key: string]: string } = {
    undergraduate: 'Search undergraduate Degree Program...',
    postgraduate: 'Search postgraduate Degree Program...',
    professional: 'Search professional Degree Program...'
  };
  this.searchPlaceholder = map[this.selectedDegreeType] || 'Search programs...';
}


  learnMore(): void {
    // Replace with actual navigation or modal logic
    alert('Learn more about our university!');
  }

  viewAllPrograms(): void {
    // Navigate to program listing
    this.router.navigate(['/public/programs']);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.backgroundImages.length;
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 15000); // 15 seconds per slide
  }

  resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  selectProgramType(type: string): void {
    this.selectedDegreeType = type;
    this.router.navigate(['/public/programs'], {
      queryParams: { type: this.selectedDegreeType }
    });
  }

   findPrograms() {
    if (!this.selectedDegreeType) {
      alert('Please select a degree type.');
      return;
    }

    this.router.navigate(['/public/programs'], {
      queryParams: {
        type: this.selectedDegreeType,
        search: this.searchQuery.trim()
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
}

