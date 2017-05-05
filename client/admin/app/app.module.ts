import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/index';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
  	HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
