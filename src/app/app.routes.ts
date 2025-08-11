import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LayoutComponent } from './public/layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

{
    path:'',
    loadChildren: () => import('./public/public.module').then(p => p.PublicModule),
    // canActivate: []
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
