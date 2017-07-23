import {Component} from '@angular/core';

import {Content} from './services/content/index';

@Component({
  selector: 'personal',
  providers: [ Content ],
  template: `
      <section class="page personal">
        <h3>תהליך אישי בדרך להריון תקין ולידה</h3>
        <div [innerHTML]="personalContent"></div>
      </section>
  `,
})
export class PersonalComponent {
  personalContent = "איך מתנהל תהליך אישי?";

  constructor(public content: Content) {

  }

  ngOnInit() {
    this.content.getData("aboutPersonal").subscribe(res => this.personalContent = res);
  }
}
