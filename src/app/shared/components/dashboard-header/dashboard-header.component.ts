import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
  standalone: false
})
export class DashboardHeaderComponent  {
  searchQuery: string = '';
  hasNotifications: boolean = true;

  userName: string = 'Osama';
  userRole: string = 'Administrator';
  userAvatar: string | null = "https://t4.ftcdn.net/jpg/03/13/37/31/360_F_313373132_b9Az7XaGLRvSLHXlINXBIGPMIOLok8ZB.jpg"; // Provide URL if available
  isUserMenuOpen: boolean = false;

  // Search handler
  onSearch(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Searching for:', inputValue);
    // Add your filtering or API call logic here
  }

  // Notification button handler
  onNotificationClick(): void {
    console.log('Notification icon clicked');
    // Open notification panel or redirect to notification page
    this.hasNotifications = false; // Assume notifications were seen
  }

  // Settings button handler
  onSettingsClick(): void {
    console.log('Settings icon clicked');
    // Navigate to settings or open settings modal
  }

  // Toggle user menu
  onUserMenuClick(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  // Handle dropdown menu clicks
  onMenuItemClick(action: string, event: Event): void {
    event.preventDefault(); // Prevent anchor link default behavior

    this.isUserMenuOpen = false; // Close menu
    switch (action) {
      case 'profile':
        console.log('Navigating to profile settings');
        break;
      case 'preferences':
        console.log('Opening preferences');
        break;
      case 'logout':
        this.logout();
        break;
    }
  }

  // Logout method
  logout(): void {
    console.log('Logging out...');
    // Add logout logic (e.g., clear session, redirect)
  }

  // Fallback for user initials if no avatar
  getUserInitials(): string {
    if (!this.userName) return '';
    const names = this.userName.trim().split(' ');
    return names.length === 1
      ? names[0][0].toUpperCase()
      : names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
  }

}
