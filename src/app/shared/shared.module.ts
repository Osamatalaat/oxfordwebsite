import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { UserSidebarComponent } from './components/userSidebar/userSidebar.component';


export const accountRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // }
];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardHeaderComponent,
    UserSidebarComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes)
  ],
   exports:[
    NavbarComponent,
    FooterComponent,
    DashboardHeaderComponent,
    UserSidebarComponent

  ]
})
export class SharedModule { }
