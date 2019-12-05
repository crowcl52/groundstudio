import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects/projects-detail/projects-detail.component';
import { StudioComponent } from './studio/studio.component';
import { TeamComponent } from './studio/team/team.component';
import { TeamDetailComponent } from './studio/team/team-detail/team-detail.component';
import { CollaboratorsComponent } from './studio/collaborators/collaborators.component';
import { BooksComponent } from './publications/books/books.component';
import { ArticlesComponent } from './publications/articles/articles.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectsDetailComponent,
    StudioComponent,
    TeamComponent,
    TeamDetailComponent,
    CollaboratorsComponent,
    BooksComponent,
    ArticlesComponent,
    VideoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
