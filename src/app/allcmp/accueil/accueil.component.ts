import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
 
    customOptions: OwlOptions = {
      loop: true,
      center: true,
      margin: 10,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        }
      },
      nav: true
    }
    slides = [{'image': 'assets/slider/slide.png'},{'image': 'assets/slider/slide.png'}];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  rechercher(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '700px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });
  }

}
