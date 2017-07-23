import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'workshop',
  providers: [ Content ],
  template: `
      <section class="page workshop">
        <h3>סדנא ותהליך אישי בדרך להריון - התכנית המלאה</h3>
        <div [innerHTML]="workshopContent"></div>
      </section>
  `,
})
export class WorkshopComponent {
  workshopContent = "איך מתנהל תהליך אישי?";

  constructor(public content: Content) {

  }

  ngOnInit() {
    this.content.getData("aboutWorkshop").subscribe(res => this.workshopContent = res);
  }
}
