import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { BookComponent } from './book/book.component';

import { BlogComponent } from './blog/blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

import { TagComponent } from './tag/tag.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreativeComponent } from './creative/creative.component';
import { ContactComponent } from './contact/contact.component';
import { NotYetComponent } from './not-yet/not-yet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
    {
      path: 'book',
      component: BookComponent
  },
    {
      path: 'creative',
      component: CreativeComponent
  },
  {
    path: 'workshop',
    component: WorkshopComponent
  },
  {
    path: 'lecture',
    component: NotYetComponent
    //component: LectureComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/edit',
    component: BlogEditComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
