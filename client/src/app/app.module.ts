import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotYetComponent } from './not-yet/not-yet.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { PersonalComponent } from './personal/personal.component';
import { TagComponent } from './tag/tag.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreativeComponent } from './creative/creative.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { HebDatePipe } from './pipes/heb-date.pipe';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { YoutubeComponent } from './youtube/youtube.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotYetComponent,
    ContactComponent,
    BookComponent,
    PersonalComponent,
    TagComponent,
    WorkshopComponent,
    CreativeComponent,
    BlogComponent,
    AboutComponent,
    MediaComponent,
    BlogEditComponent,
    HebDatePipe,
    YoutubeComponent,
    GalleryComponent,
    GalleryImageComponent,
    SafePipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TagInputModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
