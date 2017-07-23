"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./about/index");
var index_3 = require("./media/index");
var index_4 = require("./book/index");
var index_5 = require("./blog/index");
var index_6 = require("./blog/index");
var index_7 = require("./tags/index");
var index_8 = require("./personal/index");
var index_9 = require("./workshop/index");
var index_10 = require("./creative/index");
var index_11 = require("./contact/index");
var index_12 = require("./notYet/index");
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: index_1.HomeComponent
    },
    {
        path: 'personal',
        component: index_8.PersonalComponent
    },
    {
        path: 'book',
        component: index_4.BookComponent
    },
    {
        path: 'creative',
        component: index_10.CreativeComponent
    },
    {
        path: 'workshop',
        component: index_9.WorkshopComponent
    },
    {
        path: 'lecture',
        component: index_12.NotYetComponent
        //component: LectureComponent
    },
    {
        path: 'blog',
        component: index_5.BlogComponent
    },
    {
        path: 'blog/edit',
        component: index_6.BlogEditComponent
    },
    {
        path: 'tag',
        component: index_7.TagComponent
    },
    {
        path: 'about',
        component: index_2.AboutComponent
    },
    {
        path: 'media',
        component: index_3.MediaComponent
    },
    {
        path: 'contact',
        component: index_11.ContactComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map