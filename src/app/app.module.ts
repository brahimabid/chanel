import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './allcmp/accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,BrowserAnimationsModule,NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
