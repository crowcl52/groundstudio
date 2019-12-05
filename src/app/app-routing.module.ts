import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      { path: 'project-detail/:id', component: ProjectsDetailComponent },
    ]
  },
  { path: 'studio', component: StudioComponent },
  {
    path: 'team', component: TeamComponent, children: [
      { path: 'team-detail/:id', component: TeamDetailComponent },
    ]
  },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'video', component: VideoComponent },
  { path: 'contact', component: ContactComponent },


  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
