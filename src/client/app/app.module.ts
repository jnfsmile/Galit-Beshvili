import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//## Platform and Environment
//
//** our providers/directives/pipes **
import {DIRECTIVES, PIPES, PROVIDERS} from '../platform/browser';
import {ENV_PROVIDERS} from '../platform/environment';

import { APP_ROUTER_PROVIDERS }   from './app.routes';

//## App Component
//
//** our top level component that holds all of our components **
//import {APP_PROVIDERS} from './index';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
//    ...APP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS
  ]
})
export class AppModule { }
