import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/index';
import { ContactComponent }     from './contact/index';
import { AboutComponent }       from './about/index';
import { MediaComponent }       from './media/index';
import { BookComponent }        from './book/index';

import { BlogComponent }        from './blog/index';
import { BlogEditComponent }        from './blog/index';
import { Content as BlogContentService }        from './blog/services/content/index';

import { TagComponent }        from './tags/index';
import { WorkshopComponent }    from './workshop/index';
import { PersonalComponent }    from './personal/index';
import { CreativeComponent }    from './creative/index'

import { NotYetComponent }      from './notYet/index';
import { EditableComponent }      from './editable/index';
import { ThumbnailComponent }   from './thumbnail/index';
import { GalleryComponent }   from './gallery/index';
import { GalleryImageComponent }   from './gallery/index';
import { YoutubeComponent }   from './youtube/index';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { TagInputModule } from 'ng2-tag-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { HebDatePipe } from './pipes/heb-date.pipe';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
  	HttpModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    TagInputModule, BrowserAnimationsModule
  ],
  declarations: [ AppComponent, HomeComponent, ContactComponent, AboutComponent, BookComponent, BlogComponent, BlogEditComponent, TagComponent, MediaComponent,
    PersonalComponent, WorkshopComponent, CreativeComponent, NotYetComponent, EditableComponent, ThumbnailComponent, GalleryComponent, GalleryImageComponent, YoutubeComponent,
    HebDatePipe ],
  providers: [ BlogContentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
