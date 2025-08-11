import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicModule } from './public/public.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FontAwesomeModule,
    PublicModule
],
  declarations: [
    AppComponent
  ] ,
  bootstrap: [AppComponent],
})
export class AppModule { }
