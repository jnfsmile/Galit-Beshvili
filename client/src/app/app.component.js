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
var index_1 = require("./blog/services/content/index");
var index_2 = require("./blog/index");
var AppComponent = (function () {
    function AppComponent(bContent) {
        this.bContent = bContent;
        this.siteLogo = 'assets/images/site-logo.png';
        this.name = 'גלית פרידמן';
        this.url = '/';
        this.latestBlog = '/blog/';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bContent.getLastId().subscribe(function (posts) {
            var id = new index_2.BlogPost(posts[0]).id;
            _this.latestBlog = "/blog;id=" + id;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n  <header>\n   <nav class=\"navbar navbar-default\">\n\n       <!-- navbar-header -->\n       <div class=\"navbar-header\">\n\n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n           <span class=\"sr-only\">Toggle navigation</span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n         </button>\n         <a class=\"hidden-xs navbar-brand\" routerLink=\"/home\" title=\"\u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA\">\n           <img [src]=\"siteLogo\" alt=\"\u05DC\u05D5\u05D2\u05D5\" />\n           <div id=\"site-name\">\n             {{name}}\n             <br/>\n             <div>\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9-\u05E8\u05D5\u05D7\u05E0\u05D9<br />\u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</div>\n           </div>\n         </a>\n\n       </div><!-- /navbar-header -->\n\n       <!-- navbar -->\n       <div class=\"navbar-collapse collapse\">\n         <ul class=\"nav navbar-nav navbar-left\">\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/home\" routerLinkActive=\"active\">\u05D1\u05E8\u05D5\u05DB\u05D4 \u05D4\u05D1\u05D0\u05D4</a></li>\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/about\" routerLinkActive=\"active\">\u05D0\u05D5\u05D3\u05D5\u05EA</a></li>\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/media\" routerLinkActive=\"active\">\u05D1\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA</a></li>\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/personal\" routerLinkActive=\"active\">\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E9\u05D9</a></li>\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/workshop\" routerLinkActive=\"active\">\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA</a></li>\n           <!--<li><a routerLink=\"/lecture\" routerLinkActive=\"active\">\u05D4\u05E8\u05E6\u05D0\u05D5\u05EA</a></li>-->\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a [routerLink]=\"latestBlog\" routerLinkActive=\"active\">\u05D1\u05DC\u05D5\u05D2</a></li>\n           <li class=\"navbar-toggle hidden-xs\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/creative\" routerLinkActive=\"active\">\u05D4\u05E9\u05E8\u05D0\u05D4</a></li>\n           <li class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/book\" routerLinkActive=\"active\">\u05E1\u05E4\u05E8</a></li>\n           <li class=\"navbar-toggle visible-xs\" data-toggle=\"collapse\" data-target=\".navbar-collapse.in\"><a routerLink=\"/contact\" routerLinkActive=\"active\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8</a></li>\n         </ul>\n\n       </div><!-- /navbar -->\n\n   </nav>\n </header>\n <div class=\"main-container\">\n   <router-outlet></router-outlet>\n   <aside>\u05E1\u05D3\u05E0\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05D9\u05D5\u05E6\u05D0\u05EA \u05DC\u05D3\u05E8\u05DA!<br />\u05D4\u05E1\u05D3\u05E0\u05D4 \u05EA\u05EA\u05D7\u05D9\u05DC \u05D1\u05E7\u05E8\u05D5\u05D1, \u05D5\u05EA\u05EA\u05E7\u05D9\u05D9\u05DD \u05D1\u05E1\u05D8\u05D5\u05D3\u05D9\u05D5 \u05DB\u05E4\u05E8\u05D9 \u05D1\u05D4\u05D5\u05D3 \u05D4\u05E9\u05E8\u05D5\u05DF. \u05E4\u05E8\u05D8\u05D9\u05DD \u05DB\u05D0\u05DF:<br />\n   <gallery-image src=\"/assets/images/promotions/5777workshop.jpg\" map=\"\"></gallery-image>\n   <map name=\"flyer\">\n    <area shape=\"rect\" coords=\"100,200,250,50\" href=\"/workshop\" alt=\"\u05E1\u05D3\u05E0\u05D4\" title=\"\u05E1\u05D3\u05E0\u05D4\" style=\"background:red;border: 1px solid black;\">\n   </map>\n   <hr />\n   \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05D7\u05D2 -<br />\n   <a href=\"https://youtu.be/o7TxNHhI53I\">\u05E1\u05E8\u05D8\u05D5\u05DF \u05D7\u05D9\u05D6\u05D5\u05E7 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05D7\u05D2</a>\n   <br />\n   <a href=\"/assets/files/pesach_prep_77.docx\">\u05D3\u05E3 \u05D4\u05DB\u05E0\u05D4 \u05E2\u05E6\u05DE\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05D7\u05D2</a>\n   </aside>\n </div>\n <footer class=\"hidden-xs hidden-sm\">\n     <div><a class=\"email\" href=\"mailto:galit@be-shvili.co.il\">galit@be-shvili.co.il</a></div>\n     <div><a class=\"phone\" href=\"tel:+972-050-44-70-180\">050-4470180</a></div>\n     <div><a class=\"facebook\" href=\"http://facebook.com/galit.beshvili\">\u05D2\u05DC\u05D9\u05EA \u05D0\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9 \u05DC\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</a></div>\n     <!-- <a href='whatsapp://send?text=\u05D4\u05D0\u05EA\u05E8 \u05E9\u05DC \u05D2\u05DC\u05D9\u05EA \u05E4\u05E8\u05D9\u05D3\u05DE\u05DF - \u05D0\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9 \u05DC\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA: http://be-shvili.co.il'>whatsApp</a> -->\n </footer>\n\n ",
        providers: [index_1.Content]
    }),
    __metadata("design:paramtypes", [index_1.Content])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map