import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './home/herosection/herosection.component';
import { HomeComponent } from './home/home/home.component';
import { MainContentComponent } from './home/mainContent/mainContent.component';
import { HttpClientModule } from '@angular/common/http';
import { StaticSectionComponent } from './home/static-section/static-section.component';
import { OxfordGlobalComponent } from './home/oxford-global/oxford-global.component';
import { InstructorSectionComponent } from './home/instructors-section/instructors-section.component';
import { SharedModule } from "../shared/shared.module";
import { ContactUsComponent } from './contactUs/contactUs.component';
import { NewsComponent } from './newItems/news/news.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { NewsItemDetailsComponent } from './newItems/newItemDetails/newItemDetails.component';







const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsItemDetailsComponent },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
],
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeroSectionComponent,
    MainContentComponent,
    StaticSectionComponent,
    OxfordGlobalComponent,
    InstructorSectionComponent,
    ContactUsComponent,
    NewsComponent,
    NewsItemDetailsComponent
  ],
  exports: [
    InstructorSectionComponent,
  ]
})
export class PublicModule {

}
