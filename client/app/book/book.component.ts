import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'book',
  providers: [ Content ],
  template: `
      <section class="page book">
        <h3>החיים שבתוכך</h3>
        <p>
          <thumbnail src="/assets/images/book-cover.jpg" alt="כריכה של הספר החיים שבתוכך"></thumbnail>
        </p>
        <div [innerHTML]="bookContent"></div>
        <thumbnail src="/assets/images/bookLaunch/P1050794.jpg" alt="הספרים מוצעים למכירה"></thumbnail>
        <thumbnail src="/assets/images/bookLaunch/P1050805.jpg" alt="אני והספרים"></thumbnail>
        <thumbnail src="/assets/images/bookLaunch/P1050811.jpg" alt="עם תומר, מנכ&quot;ל &apos;דברי שיר&apos; וחנה, העורכת הראשית"></thumbnail>
        <thumbnail src="/assets/images/bookLaunch/P1050817.jpg" alt="דברי ברכה מהרב שורטין, ראש מכון פוע&quot;ה"></thumbnail>
        <youtube id="jHxLMnHLAlo"></youtube>
        <br />
        <youtube id="yGw6qo-9j2s"></youtube>
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
