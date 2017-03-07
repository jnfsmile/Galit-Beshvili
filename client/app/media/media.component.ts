import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'media',
  providers: [ Content ],
  template: `
      <section class="page media">
        <h3>בשבילי בתקשורת</h3>
        <div [innerHTML]="pageContent"></div>
      </section>
  `,
})
export class MediaComponent {
  pageContent = "";

  constructor(public content: Content) {

  }

  ngOnInit() {
    this.content.getData("media").subscribe(res => this.pageContent = res);
  }
}
