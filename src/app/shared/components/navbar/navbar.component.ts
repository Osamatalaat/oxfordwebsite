import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  leftNavLinks = [
    { label: 'Fees', path: '/fees' },
    { label: 'Alumni', path: '/alumni' },
    { label: 'Library', path: '/library' },
    { label: 'News', path: '/news' },
    { label: 'Events', path: '/events' },
    { label: 'Media', path: '/media' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Login', path: '/login', class: 'cursor-pointer text-[var(--color-light-blue)] font-medium hover:scale-110' }
  ];

  socialLinks = [
    { icon: 'fab fa-facebook-f', color: '#4267B2', path: '/facebook' },
    { icon: 'fab fa-instagram', color: 'pink', path: '/instagram' },
    { icon: 'fab fa-linkedin-in', color: '#0A66C2', path: '/linkedin' },
    { icon: 'fab fa-youtube', color: '#FF0000', path: '/youtube' }
  ];

  navSections = [

    {
      label: 'STUDY',
      path: '/study',
      children: [
        { label: 'Undergraduate', path: '/undergraduate' },
        { label: 'Postgraduate', path: '/postgraduate' },
        { label: 'Online Courses', path: '/online-courses' }
      ]
    },
    {
      label: 'ACADEMIC',
      path: '/academic',
      children: [
        { label: 'Faculties', path: '/faculties' },
        { label: 'Departments', path: '/departments' },
        { label: 'Programs', path: '/programs' }
      ]
    },
    {
      label: 'RESEARCH',
      path: '/research',
      children: [
        { label: 'Research Centers', path: '/research-centers' },
        { label: 'Publications', path: '/publications' },
        { label: 'Funding', path: '/funding' }
      ]
    },
    {
      label: 'ABOUT',
      path: '/about',
      children: [
        { label: 'History', path: '/history' },
        { label: 'Leadership', path: '/leadership' },
        { label: 'Campus', path: '/campus' }
      ]
    },
    {
      label: 'ENGAGE',
      path: '/engage',
      children: [
        { label: 'Community', path: '/community' },
        { label: 'Partnerships', path: '/partnerships' },
        { label: 'Outreach', path: '/outreach' }
      ]
    },
    {
      label: 'STUDENT LIFE',
      path: '/student-life',
      children: [
        { label: 'Housing', path: '/housing' },
        { label: 'Activities', path: '/activities' },
        { label: 'Support', path: '/support' }
      ]
    }
  ];

  phone = '+44 1865 270000';
  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}


