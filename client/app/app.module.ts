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
import { TagComponent }        from './tags/index';
import { WorkshopComponent }    from './workshop/index';
import { PersonalComponent }    from './personal/index';
import { CreativeComponent }    from './creative/index'

import { NotYetComponent }      from './notYet/index';
import { ThumbnailComponent }   from './thumbnail/index';
import { YoutubeComponent }   from './youtube/index';

import { LoginComponent }   from './login/index';
import { LoginPageComponent }   from './admin/login/index';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
  	HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent, ContactComponent, AboutComponent, BookComponent, BlogComponent, TagComponent, MediaComponent,
    PersonalComponent, WorkshopComponent, CreativeComponent, NotYetComponent, ThumbnailComponent, YoutubeComponent, LoginComponent,
    LoginPageComponent ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
