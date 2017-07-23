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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        console.log('hello `Contact` component');
        // static data that is bundled
        //var mockData = require('assets/mock-data/mock-data.json');
        //console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        //this.asyncDataWithWebpack();
    };
    ContactComponent.prototype.asyncDataWithWebpack = function () {
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
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        template: "\n  <section class=\"page\">\n    <ul>\n      <li><a class=\"email\" href=\"mailto:galit@be-shvili.co.il\">galit@be-shvili.co.il</a></li>\n      <li><a class=\"phone\" href=\"tel:+972-050-44-70-180\">050-4470180</a></li>\n      <li><a class=\"facebook\" href=\"http://facebook.com/galit.beshvili\">\u05D2\u05DC\u05D9\u05EA \u05D0\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9 \u05DC\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</a></li>\n    </ul>\n  </section>\n  ",
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map