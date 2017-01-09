import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: '/app/home/home.html'
})
export class HomeComponent {
}
