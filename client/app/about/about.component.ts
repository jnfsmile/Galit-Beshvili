import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'about',
  providers: [ Content ],
  template: `
      <section class="page about">
        <div [innerHTML]="aboutContent"></div>
      </section>
  `,
})
export class AboutComponent {
  aboutContent = "אודות";

  constructor(public content: Content) {

  }

  ngOnInit() {
    this.content.getData("about").subscribe(res => this.aboutContent = res);
  }
}
