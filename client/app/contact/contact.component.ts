import {Component} from '@angular/core';

@Component({
  selector: 'contact',
  template: `
  <section class="page">
    <ul>
      <li><a class="email" href="mailto:galit@be-shvili.co.il">galit@be-shvili.co.il</a></li>
      <li><a class="phone" href="tel:+972-050-44-70-180">050-4470180</a></li>
      <li><a class="facebook" href="http://facebook.com/galit.beshvili">גלית אימון אישי לפוריות</a></li>
    </ul>
  </section>
  `,
})
export class ContactComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Contact` component');
    // static data that is bundled
    //var mockData = require('assets/mock-data/mock-data.json');
    //console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    //this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    //var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    //setTimeout(() => {

    //  let asyncDataPromise = asyncMockDataPromiseFactory();
    //  asyncDataPromise.then(json => {
    //    console.log('async mockData', json);
    //  });
    //});
  }
}
