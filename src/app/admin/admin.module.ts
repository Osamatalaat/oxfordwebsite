import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { InstructorSectionComponent } from '../public/home/instructors-section/instructors-section.component';
import { AdminStudentsComponent } from './components/admin-students/admin-students.component';
import { FormsModule } from '@angular/forms';
import { AdminInstructorsComponent } from './components/admin-instructors/admin-instructors.component';
import { AdminAttendanceComponent } from './components/admin-attendance/admin-attendance.component';
import { FinanceComponent } from './components/finance/finance.component';
import { NoticeComponent } from './components/notice/notice.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from '../shared/components/login/login.component';




const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'instructors', component: AdminInstructorsComponent },
      { path: 'students', component: AdminStudentsComponent },
      { path: 'attendance', component: AdminAttendanceComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'calendar', component: CalendarComponent },
      // { path: 'logout', component: LoginComponent }, 
    ]
  }
];





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes), // Define adminRoutes in a separate file or inline
    SharedModule,
    NgChartsModule,


  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    AdminStudentsComponent,
    AdminInstructorsComponent,
    AdminAttendanceComponent,
    FinanceComponent,
    NoticeComponent,
    CalendarComponent

  ]
})
export class AdminModule { }
