import {Component} from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`NotYet` component loaded asynchronously');

@Component({
  selector: 'notyet',
  template: `
      <section class="page">
        <h3>
          אגף זה עדיין מצפה...
        </h3>
      </section>
  `,
})
export class NotYetComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `NotYet` component');
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
