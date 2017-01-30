import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'book',
  providers: [ Content ],
  template: `
      <section class="page book">
        <h2>החיים שבתוכך</h2>
        <p>
          <thumbnail src="/assets/images/book-cover.jpg" alt="כריכה של הספר החיים שבתוכך"></thumbnail>
        </p>
        <div [innerHTML]="bookContent"></div>
      </section>
  `,
})
export class BookComponent {
  bookContent = "אודות הספר";

  constructor(public content: Content) {

  }

  ngOnInit() {
    this.content.getData("aboutBook").subscribe(res => this.bookContent = res);
  }
}
