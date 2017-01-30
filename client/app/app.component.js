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
var AppComponent = (function () {
    function AppComponent() {
        this.siteLogo = 'assets/images/site-logo.png';
        this.name = 'בשבילי';
        this.url = '/';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  <header>\n   <nav class=\"navbar navbar-default\">\n\n       <!-- navbar-header -->\n       <div class=\"navbar-header\">\n\n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n           <span class=\"sr-only\">Toggle navigation</span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n         </button>\n         <a class=\"hidden-xs hidden-sm navbar-brand\" routerLink=\"/home\" title=\"\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 - \u05D0\u05D9\u05DE\u05D5\u05DF \u05D5\u05D4\u05D3\u05E8\u05DB\u05D4\">\n           <img [src]=\"siteLogo\" alt=\"\u05DC\u05D5\u05D2\u05D5\" />\n           <div id=\"site-name\">\n             {{name}}\n             <br/>\n             <div>\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05D4\u05D3\u05E8\u05DB\u05D4<br />\u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</div>\n           </div>\n         </a>\n\n       </div><!-- /navbar-header -->\n\n       <!-- navbar -->\n       <div class=\"navbar-collapse collapse\">\n         <ul class=\"nav navbar-nav navbar-left\">\n           <li><a routerLink=\"/home\" routerLinkActive=\"active\">\u05E8\u05D0\u05E9\u05D9</a></li>\n           <li><a routerLink=\"/personal\" routerLinkActive=\"active\">\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E9\u05D9</a></li>\n           <li><a routerLink=\"/workshop\" routerLinkActive=\"active\">\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA</a></li>\n           <li><a routerLink=\"/lecture\" routerLinkActive=\"active\">\u05D4\u05E8\u05E6\u05D0\u05D5\u05EA</a></li>\n           <li><a routerLink=\"/blog\" routerLinkActive=\"active\">\u05D1\u05DC\u05D5\u05D2</a></li>\n           <li><a routerLink=\"/book\" routerLinkActive=\"active\">\u05E1\u05E4\u05E8</a></li>\n           <li><a routerLink=\"/about\" routerLinkActive=\"active\">\u05D0\u05D5\u05D3\u05D5\u05EA</a></li>\n           <li><a routerLink=\"/contact\" routerLinkActive=\"active\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8</a></li>\n         </ul>\n\n       </div><!-- /navbar -->\n\n   </nav>\n </header>\n <router-outlet></router-outlet>\n <footer></footer>\n\n ",
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map