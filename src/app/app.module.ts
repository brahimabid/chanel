import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './allcmp/accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatCarouselModule } from '@ngmodule/material-carousel';

import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './allcmp/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './allcmp/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FooterComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,BrowserAnimationsModule,NoopAnimationsModule, MatCarouselModule.forRoot(),
    MatDialogModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
