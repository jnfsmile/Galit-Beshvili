import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { MediaComponent } from './media/index';
import { BookComponent } from './book/index';
import { BlogComponent } from './blog/index';
import { PersonalComponent } from './personal/index';
import { WorkshopComponent } from './workshop/index';
import { CreativeComponent } from './creative/index';
import { ContactComponent } from './contact/index';
import { NotYetComponent } from './notYet/index';

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
    path: 'blog/:id',
    component: BlogComponent
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
