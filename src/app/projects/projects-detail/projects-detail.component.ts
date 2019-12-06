import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  showInfo = true;

  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '100%',
        height: '100%',
        thumbnailsColumns: 8,
        imageAnimation: NgxGalleryAnimation.Slide,
        imagePercent: 90,
        thumbnailsPercent: 10,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 90,
        thumbnailsPercent: 10,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img1.jpg',
        medium: 'assets/img1.jpg',
        big: 'assets/img1.jpg'
      },
      {
        small: 'assets/img1.jpg',
        medium: 'assets/img1.jpg',
        big: 'assets/img1.jpg'
      },
      {
        small: 'assets/img1.jpg',
        medium: 'assets/img1.jpg',
        big: 'assets/img1.jpg'
      }
    ];

  }

}


