import { Component, Input, OnInit } from '@angular/core';
import { UserSidebarItem } from '../../../core/models/userSidebarItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userSidebar',
  templateUrl: './userSidebar.component.html',
  styleUrls: ['./userSidebar.component.css'],
  standalone: false
})
export class UserSidebarComponent implements OnInit {
  @Input() items: UserSidebarItem[] = [];
  @Input() activeRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getItemsBySection(section: string): UserSidebarItem[] {
    return this.items.filter(item => item.section === section);
  }
  goToHome(){
    // Logic to navigate to home
    this.router.navigate(['/home']);
  }

}
