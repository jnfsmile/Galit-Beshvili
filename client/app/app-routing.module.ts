import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { BookComponent } from './book/index';
import { PersonalComponent } from './personal/index';
import { WorkshopComponent } from './workshop/index';
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
      component: NotYetComponent
      //component: CreativeComponent
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
    component: NotYetComponent
    //component: BlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
