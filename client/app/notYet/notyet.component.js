"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`NotYet` component loaded asynchronously');
var NotYetComponent = (function () {
    function NotYetComponent() {
    }
    NotYetComponent.prototype.ngOnInit = function () {
        console.log('hello `NotYet` component');
        // static data that is bundled
        //var mockData = require('assets/mock-data/mock-data.json');
        //console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        //this.asyncDataWithWebpack();
    };
    NotYetComponent.prototype.asyncDataWithWebpack = function () {
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
    };
    NotYetComponent = __decorate([
        core_1.Component({
            selector: 'notyet',
            template: "\n      <section class=\"page\">\n        <h3>\n          \u05D0\u05D2\u05E3 \u05D6\u05D4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05DE\u05E6\u05E4\u05D4...\n        </h3>\n      </section>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], NotYetComponent);
    return NotYetComponent;
}());
exports.NotYetComponent = NotYetComponent;
//# sourceMappingURL=notyet.component.js.map