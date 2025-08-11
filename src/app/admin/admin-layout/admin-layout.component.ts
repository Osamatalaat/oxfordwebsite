import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { UserSidebarItem } from '../../core/models/userSidebarItem';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  standalone: false,
})
export class AdminLayoutComponent  {

  sidebarItems: UserSidebarItem[] = [
    { label: 'Dashboard', icon: 'fas fa-home', route: 'dashboard', section: 'Menu' },
    { label: 'Instructors', icon: 'fas fa-chalkboard-teacher', route: 'instructors', section: 'Menu' },
    { label: 'Students', icon: 'fas fa-user-graduate', route: 'students', section: 'Menu' },
    { label: 'Attendance', icon: 'fas fa-clipboard-check', route: 'attendance', section: 'Menu' },
    { label: 'Finance', icon: 'fas fa-file-invoice-dollar', route: 'finance', section: 'Menu' },
    { label: 'Notice', icon: 'fas fa-bell', route: 'notice', section: 'Menu' },
    { label: 'Calendar', icon: 'fas fa-calendar-alt', route: 'calendar', section: 'Menu' },
    // { label: 'Library', icon: 'fas fa-book', route: 'library', section: 'Menu' },
    // { label: 'Message', icon: 'fas fa-comment', route: 'message', section: 'Menu' },
    { label: 'Profile', icon: 'fas fa-user', route: 'profile', section: 'Other' },
    { label: 'Setting', icon: 'fas fa-cog', route: 'setting', section: 'Other' },
    { label: 'Log out', icon: 'fas fa-sign-out-alt', route: 'logout', section: 'Other' },
  ];

  activeRoute = 'dashboard ';

}
