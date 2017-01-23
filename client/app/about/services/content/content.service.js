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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var Content = (function () {
    function Content(http) {
        this.http = http;
        this.value = 'בשבילי';
    }
    Content.prototype.getData = function (key) {
        /*return this.http.get('/assets/data.json')
         .map(res => res.json());*/
        var data = {
            about: "<p><span class='about-highlight'>\u05E9\u05DC\u05D5\u05DD \u05DC\u05DA!</span>\n  </p><p>\n  <span class=\"about-highlight\">\u05E9\u05DE\u05D9 \u05D2\u05DC\u05D9\u05EA \u05E4\u05E8\u05D9\u05D3\u05DE\u05DF, \u05DE\u05DB\u05D5\u05D5\u05E0\u05EA \u05E0\u05E9\u05D9\u05DD \u05DC\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA. \u05E2\u05DB\u05E9\u05D9\u05D5 \u05E9\u05D1\u05D0\u05EA, \u05D0\u05D5\u05DB\u05DC \u05DC\u05E1\u05E4\u05E8 \u05DC\u05DA \u05DE\u05D4 \u05D4\u05D1\u05D9\u05D0 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05DB\u05D0\u05DF.</span>\n  </p><p>\n  \u05DB\u05D1\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DE\u05D4 \u05E9\u05E0\u05D9\u05DD, \u05DC\u05D0\u05D7\u05E8 \u05D4\u05DC\u05D9\u05D3\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4, \u05D4\u05D1\u05E0\u05EA\u05D9 \u05E9\u05D4\u05E9\u05DC\u05D9\u05D7\u05D5\u05EA \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05D4\u05E2\u05D5\u05DE\u05D3\u05EA \u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA, \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05D4 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05E9\u05DC\u05D4 \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05E2\u05DD \u05D4\u05D4\u05DE\u05EA\u05E0\u05D4 \u05D4\u05D6\u05D5 \u05D1\u05E9\u05DE\u05D7\u05D4, \u05D1\u05E8\u05D5\u05D2\u05E2 \u05D5\u05D1\u05E9\u05DC\u05DE\u05D5\u05EA \u05E2\u05DD \u05E2\u05E6\u05DE\u05D4. \u05D9\u05E9 \u05DC\u05D9 \u05E9\u05D9\u05D8\u05D4 \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05DC\u05E2\u05E6\u05DE\u05DA \u05D0\u05EA \u05E9\u05DE\u05D7\u05EA \u05D4\u05D7\u05D9\u05D9\u05DD, \u05D0\u05EA \u05D4\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E9\u05DC\u05DA \u05D1\u05E2\u05E6\u05DE\u05DA \u05D5\u05D1\u05D2\u05D5\u05E4\u05DA \u05D5\u05D0\u05EA \u05D4\u05D7\u05D5\u05E4\u05E9 \u05DC\u05D7\u05D9\u05D5\u05EA \u05D7\u05D9\u05D9\u05DD \u05E0\u05D5\u05E8\u05DE\u05D0\u05DC\u05D9\u05D9\u05DD \u05DC\u05DE\u05E8\u05D5\u05EA \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05E0\u05DB\u05E4\u05D5 \u05E2\u05DC\u05D9\u05DA.\n  </p><p>\n  <span class=\"about-highlight\">\u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05D4\u05D6\u05D4 \u05D0\u05E0\u05D9 \u05DE\u05DB\u05D9\u05E8\u05D4 \u05DE\u05E7\u05E8\u05D5\u05D1. </span> \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05E9\u05E2\u05D1\u05E8\u05EA\u05D9 \u05D0\u05D9\u05EA\u05D4 \u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D4\u05D9\u05D0 \u05D0\u05E0\u05D9 \u05D1\u05E2\u05E6\u05DE\u05D9 \u263A. \u05D6\u05DE\u05DF \u05E7\u05E6\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05E9\u05E0\u05D9\u05E9\u05D0\u05EA\u05D9 \u05DC\u05D0\u05D9\u05E9 \u05E9\u05DC\u05D9 \u05E0\u05DB\u05E0\u05E1\u05EA\u05D9 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D4\u05DE\u05D0\u05EA\u05D2\u05E8. \u05D1\u05D3\u05E8\u05DA \u05E9\u05E2\u05D1\u05E8\u05EA\u05D9 \u05DC\u05DE\u05D3\u05EA\u05D9 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05E9\u05D1\u05D9\u05DC \u05D4\u05E0\u05DB\u05D5\u05DF \u05DC\u05D9, \u05DC\u05D7\u05D9\u05D5\u05EA \u05D2\u05DD \u05DB\u05E9\u05D8\u05E8\u05DD \u05E0\u05D5\u05E6\u05E8\u05D5 \u05D7\u05D9\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05D9 \u05D5\u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DE\u05D7\u05D4 \u05D5\u05D1\u05D8\u05D5\u05D7\u05D4 \u05D1\u05DE\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05D1\u05DC\u05D9 \u05E7\u05E9\u05E8 \u05DC\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D1\u05D8\u05D0. \u05D4\u05D3\u05E8\u05DA \u05D4\u05D6\u05D5 \u05D4\u05E0\u05D9\u05D1\u05D4 \u05DC\u05D9 \u05E2\u05D3 \u05D4\u05D9\u05D5\u05DD \u05E9\u05DC\u05D5\u05E9 \u05E4\u05D9\u05E8\u05D5\u05EA \u05D1\u05D8\u05DF \u05DE\u05EA\u05D5\u05E7\u05D9\u05DD \u05E9\u05D0\u05E0\u05D9 \u05D2\u05D0\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05DE\u05D0 \u05E9\u05DC\u05D4\u05DD, \u05D5\u05E9\u05DC \u05D0\u05DC\u05D4, \u05D1\u05E2\"\u05D4, \u05E9\u05D9\u05D1\u05D5\u05D0\u05D5 \u05D0\u05D7\u05E8\u05D9\u05D4\u05DD.\n  </p><p>\n  <span class=\"about-highlight\">\u05D0\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D9 \u05D4\u05D9\u05E7\u05E8</span> \u05D0\u05E0\u05D9 \u05DE\u05E9\u05DC\u05D1\u05EA \u05E2\u05DD \u05DB\u05D9\u05D5\u05D5\u05DF (\u05D0\u05D9\u05DE\u05D5\u05DF \u05D9\u05D4\u05D5\u05D3\u05D9) \u05E9\u05DC\u05DE\u05D3\u05EA\u05D9 \u05D1\u05DE\u05DB\u05DC\u05DC\u05EA \"\u05DB\u05D5\u05D5\u05E0\u05D4\", \u05E9\u05DD \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05DB\u05DC\u05D9\u05DD \u05DE\u05E2\u05E9\u05D9\u05D9\u05DD \u05D4\u05DE\u05E9\u05DC\u05D1\u05D9\u05DD \u05D0\u05EA \u05E2\u05D5\u05DC\u05DD \u05D4\u05D0\u05D9\u05DE\u05D5\u05DF \u05E2\u05DD \u05E2\u05D5\u05DC\u05DD \u05D4\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05D4\u05D9\u05D4\u05D5\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05DB\u05DC \u05E8\u05D5\u05D1\u05D3\u05D9 \u05D4\u05D7\u05D9\u05D9\u05DD \u05DC\u05E4\u05E9\u05D5\u05D8\u05D4, \u05D1\u05D4\u05D9\u05E8\u05D4 \u05D5\u05DE\u05E2\u05E9\u05D9\u05EA. \u05DC\u05DE\u05D3\u05EA\u05D9 \u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D5\u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05E0\u05D9 \u05DE\u05E8\u05E6\u05D4 \u05DB\u05D1\u05E8 \u05DE\u05D2\u05D9\u05DC 7 (\u05D0\u05EA \u05D4\u05E1\u05D8\u05D0\u05D6' \u05E2\u05E9\u05D9\u05EA\u05D9 \u05E2\u05DC \u05D4\u05D1\u05D5\u05D1\u05D5\u05EA \u05E9\u05DC\u05D9) \u05D5\u05D4\u05D9\u05D5\u05DD, \u05D0\u05DC \u05D3\u05D0\u05D2\u05D4, \u05D0\u05E0\u05D9 \u05DE\u05D3\u05D1\u05E8\u05EA \u05D1\u05E4\u05E0\u05D9 \u05E7\u05D4\u05DC \u05E0\u05E9\u05D9\u05DD. \u05DC\u05D0 \u05D0\u05E9\u05DE\u05D9\u05D8 \u05D0\u05EA \u05D4\u05E2\u05D5\u05D1\u05D3\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC\u05EA \u05EA\u05D5\u05D0\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05D5\u05DA \u05D5\u05D4\u05D5\u05E8\u05D0\u05EA \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D9\u05D3\u05D9\u05E2\u05EA \u05D4\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DE\u05E9\u05DE\u05E9\u05EA \u05D0\u05D5\u05EA\u05D9 \u05D1\u05D7\u05D9\u05D9\u05DD \u05D5\u05D4\u05D7\u05D9\u05E0\u05D5\u05DA \u05E2\u05D5\u05D6\u05E8 \u05DC\u05D9, \u05D1\u05E2\u05D9\u05E7\u05E8, \u05DC\u05D7\u05E0\u05DA \u05D0\u05EA \u05E2\u05E6\u05DE\u05D9!\n  </p><p>\n  <span class=\"about-highlight\">\u05DE\u05DB\u05D5\u05D5\u05E0\u05EA? </span> \u05D4\u05E8\u05D1\u05D4 \u05E9\u05D5\u05D0\u05DC\u05D9\u05DD \u05DE\u05D4 \u05D6\u05D4 \u05D5\u05D2\u05DD \u05D4\u05D0\u05DD \u05D6\u05D4 \u05E1\u05EA\u05DD \u05E0\u05E9\u05DE\u05E2 \u05D8\u05D5\u05D1 \u05D0\u05D5 \u05E9\u05D9\u05E9 \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D6\u05D4 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA? \u05D0\u05D6 \u05DB\u05DF! \u05DB\u05DE\u05DB\u05D5\u05D5\u05E0\u05EA \u05D0\u05E0\u05D9 \u05DE\u05DB\u05D5\u05D5\u05E0\u05EA \u05D0\u05D5\u05EA\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E7\u05E9\u05D5\u05D1\u05D4 \u05DC\u05E2\u05E6\u05DE\u05DA \u05DC\u05D4\u05D9\u05E4\u05D2\u05E9 \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA, \u05E2\u05DD \u05D4\u05DB\u05D5\u05D7\u05D5\u05EA \u05D5\u05D4\u05E2\u05E6\u05D5\u05EA \u05E9\u05DB\u05D1\u05E8 \u05D8\u05DE\u05D5\u05E0\u05D9\u05DD \u05D1\u05DA. \u05DE\u05D4 \u05E9\u05D0\u05EA \u05D4\u05DB\u05D9 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05D6\u05D4 \u05DC\u05D0 \u05E2\u05E6\u05D5\u05EA, \u05D0\u05D5 \u05DE\u05D8\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05D0\u05D5 \u05E9\u05D9\u05D2\u05D9\u05D3\u05D5 \u05DC\u05DA \u05DE\u05D4 \u05DC\u05E2\u05E9\u05D5\u05EA. \u05D0\u05DC\u05D0 \u05DE\u05D9\u05E9\u05D4\u05D9 \u05E9\u05EA\u05DB\u05D5\u05D5\u05DF \u05D0\u05D5\u05EA\u05DA, \u05D1\u05E7\u05E6\u05D1 \u05E9\u05DC\u05DA, \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D9\u05E2\u05D3 \u05E9\u05DC\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1\u05D4 \u05DC\u05DA. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D9 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E7\u05E9\u05D5\u05D1\u05D4 \u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05E9\u05DC\u05DA \u05D5\u05D2\u05DD... \u05DC\u05E9\u05EA\u05D9\u05E7\u05D5\u05EA. \u05D4\u05DB\u05DC\u05D9\u05DD \u05E9\u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05E8\u05E9\u05D5\u05EA\u05D9 \u05DE\u05D0\u05E4\u05E9\u05E8\u05D9\u05DD \u05DC\u05D9 \u05DC\u05EA\u05EA \u05DC\u05DA \u05D0\u05EA \u05D4\u05DE\u05E2\u05E0\u05D4 \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC\u05DA.\n  </p><p>\n  <span class=\"about-highlight\">\u05D0\u05E0\u05D9 \u05DE\u05D5\u05D3\u05D4</span> \u05E2\u05DC \u05D4\u05DB\u05D9\u05E9\u05E8\u05D5\u05DF \u05D4\u05DE\u05D1\u05D5\u05E8\u05DA \u05E9\u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05E2\u05D5\u05DE\u05E7\u05DD \u05E9\u05DC \u05D3\u05D1\u05E8\u05D9\u05DD, \u05DC\u05D0 \u05DC\u05D4\u05E1\u05EA\u05E4\u05E7 \u05D1\u05D0\u05E7\u05DE\u05D5\u05DC, \u05E4\u05EA\u05E8\u05D5\u05DF \u05DE\u05D4\u05D9\u05E8 \u05D5\u05E9\u05D8\u05D7\u05D9, \u05D0\u05DC\u05D0 \u05DC\u05D0\u05D7\u05D5\u05D6 \u05D1\u05E9\u05D5\u05E8\u05E9 \u05D4\u05D3\u05D1\u05E8 \u05D5\u05DE\u05E9\u05DD \u05DC\u05E6\u05DE\u05D5\u05D7 \u05D5\u05DC\u05D4\u05E6\u05DE\u05D9\u05D7 \u05D1\u05D0\u05DE\u05EA. \u05D9\u05E9 \u05DC\u05D9 \u05E1\u05D9\u05E4\u05D5\u05E7 \u05D2\u05D3\u05D5\u05DC \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05D9\u05E9\u05D4 \u05E6\u05D5\u05DE\u05D7\u05EA \u05D5\u05DE\u05EA\u05E2\u05E6\u05DE\u05EA \u05DC\u05E0\u05D5\u05DB\u05D7 \u05D4\u05E7\u05D5\u05E9\u05D9, \u05D0\u05D9\u05DA \u05D4\u05D9\u05D0 \u05D4\u05D5\u05E4\u05DB\u05EA \u05D0\u05EA \u05D7\u05D9\u05D9\u05D4 \u05DC\u05E4\u05D5\u05E8\u05D9\u05D9\u05DD \u05D5\u05DB\u05D4\u05DE\u05E9\u05DA \u05DC\u05DB\u05DC \u05D6\u05D4, \u05D2\u05DD \u05D7\u05D5\u05D1\u05E7\u05EA \u05D7\u05D9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD. \u05D0\u05E0\u05D9 \u05D9\u05D5\u05D3\u05E2\u05EA \u05D4\u05D9\u05D8\u05D1 \u05E2\u05D3 \u05DB\u05DE\u05D4 \u05D6\u05D4 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05E9\u05D9\u05D4\u05D9\u05D4 \u05D0\u05D9\u05E4\u05D4 \u05DC\u05E4\u05E8\u05D5\u05E7 \u05D5\u05DC\u05DB\u05D0\u05D5\u05D1 \u05DB\u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05DC\u05D0 \u05E9\u05D9\u05E4\u05D5\u05D8\u05D9\u05D5\u05EA \u05D5\u05DC\u05E9\u05DE\u05D5\u05D7 \u05D2\u05DD \u05DE\u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05D4\u05DB\u05D9 \u05E7\u05D8\u05E0\u05D9\u05DD. \u05DC\u05DB\u05DF \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05E0\u05D9 \u05DE\u05E9\u05E7\u05D9\u05E2\u05D4 \u05D1\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E8\u05D7\u05D1 \u05DB\u05E3 \u05D6\u05DB\u05D5\u05EA, \u05D4\u05E7\u05E9\u05D1\u05D4, \u05E2\u05D9\u05DF \u05D8\u05D5\u05D1\u05D4 \u05D5\u05D4\u05DE\u05D5\u05DF \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05D5\u05D0\u05DE\u05E4\u05EA\u05D9\u05D4.\n  </p><p>\n  <span class=\"about-highlight\">\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D0\u05D9\u05EA\u05D9</span> \u05E0\u05E2\u05E9\u05D9\u05EA \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E9\u05D9 \u05D0\u05D5 \u05D1\u05E1\u05D3\u05E0\u05D0 \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA \u05D1\u05D4\u05E0\u05D7\u05D9\u05D9\u05EA\u05D9. \u05D0\u05D1\u05DC, \u05D1\u05E2\u05D9\u05E0\u05D9, \u05E9\u05E0\u05D9\u05D4\u05DD \u05D9\u05D7\u05D3 \u05D6\u05D4 \u05D4\u05E9\u05D9\u05DC\u05D5\u05D1 \u05D4\u05DE\u05E0\u05E6\u05D7! \u05DE\u05D9 \u05DB\u05DE\u05D5\u05DA \u05D9\u05D5\u05D3\u05E2\u05EA, \u05DB\u05E9\u05DE\u05D7\u05DB\u05D9\u05DD \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF \u05E9\u05DC\u05D0 \u05DE\u05D2\u05D9\u05E2 \u05D1\u05E7\u05DC\u05D5\u05EA, \u05D7\u05D5\u05D5\u05D9\u05DD \u05E7\u05D5\u05E9\u05D9 \u05D5\u05D1\u05DC\u05D1\u05D5\u05DC \u05D2\u05D3\u05D5\u05DC. \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D5\u05EA \u05E1\u05D3\u05E8 \u05D1\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA, \u05D1\u05E8\u05D2\u05E9\u05D5\u05EA \u05D5\u05D1\u05E8\u05E6\u05D5\u05E0\u05D5\u05EA, \u05E0\u05D5\u05D2\u05E2\u05D5\u05EA \u05D1\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D6\u05E7\u05D5\u05EA \u05D5\u05D4\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D5\u05EA \u05E9\u05D1\u05DA \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DC\u05E0\u05D5 \u05E7\u05E8\u05E7\u05E2 \u05E4\u05D5\u05E8\u05D9\u05D9\u05D4 \u05DC\u05E6\u05DE\u05D5\u05D7 \u05DE\u05DE\u05E0\u05D4 \u05D5\u05E8\u05E7 \u05D0\u05D6 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D5\u05EA \u05DC\u05D4\u05E7\u05E9\u05D9\u05D1 \u05D1\u05E2\u05D3\u05D9\u05E0\u05D5\u05EA \u05DC\u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4 \u05D1\u05EA\u05D5\u05DB\u05DA \u05D5\u05DE\u05D8\u05DC\u05D8\u05DC \u05D0\u05EA \u05D7\u05D9\u05D9\u05DA. \u05D0\u05D7\u05E8 \u05DB\u05DA \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05E6\u05DC\u05DA \u05D0\u05D9\u05D6\u05D5\u05DF \u05E4\u05E9\u05D5\u05D8 \u05D1\u05D9\u05DF \u05D4\u05D2\u05D5\u05E3 \u05DC\u05E0\u05E4\u05E9 \u05D5\u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD \u05DC\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D4\u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9\u05EA \u05E9\u05DC\u05DA. \u05DE\u05DB\u05D0\u05DF \u05D5\u05D0\u05D9\u05DC\u05DA \u05D4\u05E9\u05DE\u05D9\u05D9\u05DD \u05D4\u05DD \u05D4\u05D2\u05D1\u05D5\u05DC, \u05D4\u05D7\u05D9\u05D9\u05DD \u05E1\u05D5\u05E3 \u05E1\u05D5\u05E3 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD, \u05E8\u05D2\u05D5\u05E2\u05D9\u05DD \u05D5\u05E4\u05D5\u05E8\u05D9\u05D9\u05DD.\n  </p><p>\n  <span class=\"about-highlight\">\u05D0\u05E0\u05D9 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D4</span> \u05E9\u05D2\u05D5\u05E3 \u05D5\u05E0\u05E4\u05E9 \u05DE\u05E9\u05E4\u05D9\u05E2\u05D9\u05DD \u05D6\u05D4 \u05E2\u05DC \u05D6\u05D4 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05D0\u05D5\u05D3 \u05D7\u05D6\u05E7\u05D4, \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E9\u05DE\u05EA\u05D7\u05D5\u05DC\u05DC \u05D1\u05E0\u05E4\u05E9 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05E2\u05DC \u05D4\u05D2\u05D5\u05E3. \u05E2\u05DC\u05D9\u05E0\u05D5 \u05DC\u05D4\u05D0\u05DE\u05D9\u05DF \u05E9\u05D9\u05E9 \u05DC\u05E0\u05D5 \u05D0\u05EA \u05D4\u05DB\u05D5\u05D7 \u05D5\u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D1\u05E8\u05D2\u05E9\u05D5\u05EA \u05D5\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05E8\u05E6\u05D5\u05D9\u05D9\u05DD \u05DC\u05E0\u05D5 \u05DC\u05E0\u05D5\u05DB\u05D7 \u05DB\u05DC \u05E7\u05D5\u05E9\u05D9. \u05D4\u05EA\u05DE\u05D3\u05D4, \u05E1\u05D1\u05DC\u05E0\u05D5\u05EA \u05D5\u05D4\u05D5\u05E7\u05E8\u05EA \u05DB\u05DC \u05E6\u05E2\u05D3 \u05E7\u05D8\u05DF \u05D9\u05E2\u05D6\u05E8\u05D5 \u05DC\u05E0\u05D5 \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D7\u05D9\u05D9\u05E0\u05D5 \u05DC\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05D5\u05E4\u05D5\u05E8\u05D9\u05D9\u05DD \u05DB\u05E4\u05D9 \u05E9\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E8\u05D5\u05E6\u05D5\u05EA. \u05D4\u05E1\u05D9\u05DB\u05D5\u05D9\u05D9\u05DD \u05E9\u05DC \u05D0\u05D9\u05E9\u05D4 \u05E9\u05D7\u05D9\u05D4 \u05D7\u05D9\u05D9\u05DD \u05E4\u05D5\u05E8\u05D9\u05D9\u05DD \u05D5\u05E9\u05DE\u05D7\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D7\u05D9\u05D9\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D4\u05E8\u05D1\u05D4! \u05D5\u05D1\u05DB\u05DC\u05DC, \u05D0\u05E0\u05D9 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D4 \u05E9\u05DB\u05DC \u05D0\u05EA\u05D2\u05E8 \u05E9\u05E0\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05E0\u05D5, \u05DC\u05D0 \u05D4\u05D2\u05D9\u05E2 \u05D1\u05D8\u05E2\u05D5\u05EA \u05D0\u05DC\u05D0 \u05D9\u05E9 \u05DC\u05D5 \u05EA\u05E4\u05E7\u05D9\u05D3 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05E0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D3\u05DD \u05D5\u05DC\u05E4\u05EA\u05D7 \u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5. \u05D2\u05DD \u05D1\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D6\u05D4 \u05D9\u05E9 \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05DC\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D5\u05DC\u05DC\u05DE\u05D9\u05D3\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05D0\u05DD \u05E8\u05E7 \u05DE\u05EA\u05D1\u05D5\u05E0\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD \u05D4\u05D6\u05D4 \u05D5\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E6\u05D0\u05EA \u05DC\u05DE\u05E1\u05E2 \u05D0\u05D9\u05E9\u05D9. \u05D5\u05D0\u05D6 \u05D4\u05E8\u05D5\u05D5\u05D7 \u05DB\u05E4\u05D5\u05DC \u2013 \u05E0\u05E4\u05E9 \u05E4\u05D5\u05E8\u05D9\u05D9\u05D4 \u05D5\u05D2\u05D5\u05E3 \u05E4\u05D5\u05E8\u05D4!\n  </p><p>\n  <span class=\"about-highlight\">\u05D0\u05D6 \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DC\u05E0\u05D5 \u05D3\u05E8\u05DA \u05E6\u05DC\u05D7\u05D4! </span>\n  </p><p>\n  <span class=\"about-highlight\">\u05E9\u05DC\u05DA \u05D1\u05D0\u05D4\u05D1\u05D4, \u05D2\u05DC\u05D9\u05EA. </span>\n  </p><p>\n  \u05D0\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA \u05D0\u05EA \u05D4\u05D7\u05D5\u05D1\u05E8\u05EA <a href=\"\">\"\u05D1\u05D3\u05E8\u05DA \u05DC\u05D7\u05D9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD\"</a> \u05DC\u05D7\u05E6\u05D9 \u05D5\u05E7\u05D1\u05DC\u05D9 \u05D0\u05D5\u05EA\u05D4 \u05D7\u05D9\u05E0\u05DD!\n  </p><p>\n  \u05D0\u05E0\u05D9 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D4 \u05D0\u05D5\u05EA\u05DA \u05DC\u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D7\u05D9\u05E0\u05DD \u05D1\u05D4 \u05E0\u05EA\u05D0\u05D9\u05DD \u05DC\u05DA \u05D0\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05E9\u05DC\u05DA \u05D1\u05E7\u05E6\u05D1 \u05D4\u05E0\u05DB\u05D5\u05DF \u05DC\u05DA.\n  </p><p>\n  \u05DB\u05D1\u05E8 \u05E9\u05DE\u05E2\u05EA \u05E2\u05DC \u05D4\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC\u05D9 \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\"? \u05D1\u05E2\u05D6\u05E8\u05EA\u05D5 \u05EA\u05E6\u05DC\u05D9\u05D7\u05D9 \u05DC\u05D2\u05DC\u05D5\u05EA \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05E9\u05DC\u05DA \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05E9\u05DE\u05D7\u05D4, \u05D1\u05E8\u05D5\u05D2\u05E2 \u05D5\u05D1\u05E9\u05DC\u05DE\u05D5\u05EA \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA. \u05EA\u05D5\u05DB\u05DC\u05D9 \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05D0\u05D5\u05EA\u05D5 \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9 \u05D0\u05D5 \u05DE\u05D5\u05D3\u05E4\u05E1.\n  </p><p>\n  \u05D0\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E9\u05DE\u05E2\u05EA \u05D0\u05EA \u05D4\u05D4\u05E8\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D9 \"\u05E9\u05D1\u05E2\u05EA \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD \u05DC\u05E6\u05D0\u05EA \u05DE\u05E0\u05E6\u05D7\u05EA \u05DE\u05DB\u05DC \u05E7\u05D5\u05E9\u05D9\" \u05D0\u05E9\u05DE\u05D7 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05D5\u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05DC\u05DB\u05DC\u05DC \u05D4\u05E0\u05E9\u05D9\u05DD \u05D1\u05D0\u05D6\u05D5\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05D9\u05DA.\n  </p>",
            aboutBook: "<p>\n\t<span class=\"about-highlight\">\u05DB\u05DC \u05D4\u05DE\u05EA\u05E0\u05D4 \u05D5\u05E6\u05D9\u05E4\u05D9\u05D9\u05D4 \u05DC\u05DE\u05E9\u05D4\u05D5</span>\t\u05E9\u05D8\u05E8\u05DD \u05E7\u05D5\u05E8\u05D4\n\t<br />\n\t\u05D8\u05D5\u05DE\u05E0\u05EA \u05D1\u05EA\u05D5\u05DB\u05D4 \u05D2\u05DD \u05EA\u05D7\u05D5\u05E9\u05EA \u05D0\u05DB\u05D6\u05D1\u05D4 \u05D5\u05D4\u05D7\u05DE\u05E6\u05D4 '\u05DC\u05DE\u05D4 \u05D6\u05D4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E7\u05E8\u05D4'\n\t<br />\n\t\u05D4\u05E2\u05D9\u05DB\u05D5\u05D1 \u05D4\u05D6\u05D4, \u05D0\u05E8\u05D5\u05DA \u05D0\u05E9\u05E8 \u05D9\u05D4\u05D9\u05D4, \u05D9\u05D5\u05E6\u05E8 \u05DE\u05E2\u05D2\u05DC \u05E9\u05DC\n\t<br />\n\t<span class=\"about-highlight\">\u05E8\u05E6\u05D5\u05DF \u05DC\u05DE\u05D9\u05DE\u05D5\u05E9 \u2013 \u05E6\u05D9\u05E4\u05D9\u05D9\u05D4 \u2013 \u05D0\u05DB\u05D6\u05D1\u05D4 \u2013 \u05EA\u05E1\u05DB\u05D5\u05DC \u2013 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8 \u05E0\u05E7\u05D5\u05D3\u05EA \u05D0\u05D5\u05E8 \u05D7\u05D3\u05E9\u05D4</span>\t<br />\n\t\u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D4\u05DE\u05E2\u05D2\u05DC \u05D4\u05D6\u05D4 \u05D0\u05EA \u05DE\u05E0\u05E1\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3, \u05DC\u05D8\u05E4\u05DC \u05D1\u05D5, \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DB\u05D1\u05E8 \u05D0\u05DC \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05D4\u05DE\u05D9\u05D5\u05D7\u05DC\n</p><p>\n<span class=\"about-highlight\">\u05D5\u05DE\u05D4 \u05E2\u05DD \u05D4\u05E0\u05E4\u05E9? \u05D4\u05E7\u05D5\u05DC \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9 \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA?</span>\n</p><p>\n\u05D4\u05E1\u05E4\u05E8 \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\"\n<br />\n\u05E0\u05DB\u05EA\u05D1 \u05DE\u05EA\u05D5\u05DA\n<span class=\"about-highlight\">\u05DC\u05D1 \u05E4\u05D5\u05E2\u05DD \u05D5\u05DE\u05E8\u05D2\u05D9\u05E9</span>,\n<br />\n\u05DE\u05EA\u05D5\u05DA\n<span class=\"about-highlight\">\u05DC\u05D9\u05DE\u05D5\u05D3, \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05D9\u05DD \u05D5\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9</span>\u05E0\u05E9\u05D9\u05DD \u05E9\u05DE\u05D7\u05DB\u05D5\u05EA...\n<br />\n\u05D5\u05DE\u05EA\u05D5\u05DA \u05E9\u05DC\u05D9\u05D7\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E8\u05D1\u05D5\u05EA \u05E9\u05DE\u05D7\u05D4, \u05D0\u05D4\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05EA \u05D1\u05E2\u05D5\u05DC\u05DD.\n<br />\n\u05D4\u05E1\u05E4\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05DC\u05E0\u05D5\n<br />\n\u05E9\n<span class=\"about-highlight\">\u05D4\u05E0\u05E4\u05E9 \u05E4\u05D5\u05E2\u05DC\u05EA \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3</span>\u05D5\u05D9\u05D7\u05D3 \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D2\u05DD \u05D4\u05D9\u05D0 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05D8\u05D0 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D4.\n</p><p>\n<span class=\"about-highlight\">\u05D4\u05E0\u05E4\u05E9</span>\u05D7\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05DE\u05E2\u05D2\u05DC \u05D4\u05D6\u05D4.\n<br />\n\u05D2\u05DD \u05DC\u05D4 \u05E7\u05E9\u05D4 \u05E9\u05DD \u05D5\u05D2\u05DD \u05D4\u05D9\u05D0 \u05E8\u05D5\u05E6\u05D4 \u05DB\u05D1\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D7\u05D5\u05D5\u05EA \u05DE\u05E2\u05D2\u05DC \u05E9\u05D5\u05E0\u05D4, \u05E9\u05DC \u05D7\u05D9\u05D9\u05DD \u05E4\u05E8\u05D9\u05D7\u05D4 \u05D5\u05E9\u05DE\u05D7\u05D4.\n<br />\n\u05D5\u05D4\u05D9\u05D0 \u05DE\u05D5\u05DB\u05E0\u05D4 \u05DC\u05D2\u05DC\u05D5\u05EA \u05D0\u05D9\u05DA \u05E2\u05D5\u05E9\u05D9\u05DD \u05D0\u05EA \u05D6\u05D4.\n<br />\n\u05D5\u05D4\u05D9\u05D0 \u05DE\u05DB\u05D5\u05E0\u05E1\u05EA \u05D5\u05DE\u05DB\u05D5\u05D5\u05E6\u05EA \u05D1\u05EA\u05D5\u05DA \u05E2\u05E6\u05DE\u05D4.\n</p><p>\n\u05D4\u05E2\u05E0\u05D9\u05D9\u05DF \u05D4\u05D5\u05D0 \u05E9\n<span class=\"about-highlight\">\u05DC\u05E0\u05E4\u05E9 \u05E9\u05E4\u05D4 \u05DE\u05E9\u05DC \u05E2\u05E6\u05DE\u05D4</span>.\n<br />\n\u05D5\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05D4\u05D6\u05D0\u05EA.\n<br />\n<span class=\"about-highlight\">\u05DE\u05D4 \u05D4\u05D9\u05D0 \u05DE\u05E1\u05E4\u05E8\u05EA? \u05DE\u05D4 \u05D4\u05D9\u05D0 \u05DE\u05E8\u05D2\u05D9\u05E9\u05D4? \u05DE\u05D4 \u05D4\u05D9\u05D0 \u05DE\u05D1\u05E7\u05E9\u05EA? \u05DE\u05D4 \u05E4\u05D5\u05EA\u05D7 \u05D0\u05D5\u05EA\u05D4 \u05DC\u05D8\u05D5\u05D1?</span>\n</p><p>\n<span class=\"about-highlight\">\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8 \u05E0\u05E7\u05D5\u05D3\u05EA \u05D0\u05D5\u05E8 \u05D7\u05D3\u05E9\u05D4 \u05D4\u05D9\u05D0 \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05D8\u05D5\u05D1\u05D4 \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05E9\u05DC \u05D4\u05E0\u05E4\u05E9.</span>\n<br />\n<span class=\"about-highlight\">\u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E0\u05E4\u05E9 \u05E9\u05DC\u05DA \u05DE\u05EA\u05D5\u05DA</span>\n<br />\n\u05D4\u05E7\u05E9\u05D1\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA,\n<br />\n\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA,\n<br />\n\u05E8\u05D2\u05E9\u05D5\u05EA,\n<br />\n\u05D4\u05E7\u05D5\u05DC\u05D5\u05EA \u05D4\u05DE\u05EA\u05E8\u05D5\u05E6\u05E6\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05DA.\n</p><p>\n<span class=\"about-highlight\">\u05D4\u05E7\u05E9\u05D1\u05D4 \u05DE\u05D5\u05D3\u05E2\u05EA \u05DC\u05E0\u05E4\u05E9 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05DA</span>\n<br />\n\u05D1\u05D4\u05D9\u05E8\u05D5\u05EA\n<br />\n\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D5\u05D4\u05EA\u05DB\u05D5\u05D5\u05E0\u05E0\u05D5\u05EA \u05DE\u05D7\u05D5\u05D3\u05E9\u05EA\n<br />\n\u05E9\u05D7\u05E8\u05D5\u05E8 \u05DE\u05DE\u05E2\u05D2\u05DC \u05D4\u05EA\u05E1\u05DB\u05D5\u05DC\n<br />\n\u05D5\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05DE\u05E2\u05D2\u05DC \u05D4\u05E9\u05DE\u05D7\u05D4\n<br />\n<span class=\"about-highlight\">\u05D1\u05D3\u05E8\u05DB\u05DA \u05DC\u05D4\u05D1\u05D0\u05EA \u05D7\u05D9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD.</span>\n</p><p>\n<span class=\"about-highlight\">\u05DC\u05DE\u05D9 \u05D4\u05E1\u05E4\u05E8 \u05DE\u05D9\u05D5\u05E2\u05D3?</span>\n<br />\n\u05D4\u05E1\u05E4\u05E8 \u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05E9\u05DE\u05DE\u05EA\u05D9\u05E0\u05D4 \u05DC\u05E4\u05E8\u05D9 \u05D1\u05D8\u05E0\u05D4 \u05D5\u05D1\u05E2\u05E6\u05DD \u05DC\u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05DE\u05DE\u05EA\u05D9\u05E0\u05D4 \u05E9\u05DE\u05E9\u05D4\u05D5 \u05D8\u05D5\u05D1 \u05D9\u05E7\u05E8\u05D4 \u05D1\u05D7\u05D9\u05D9\u05D4\n<br />\n\u05D5\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05DE\u05E2\u05D2\u05DC \u05E9\u05DC \u05D7\u05D9\u05D5\u05EA \u05E9\u05DE\u05D7\u05D4 \u05D5\u05D8\u05D5\u05D1.\n<br />\n\u05D4\u05E1\u05E4\u05E8\n<span class=\"about-highlight\">\u05DE\u05DB\u05D5\u05D5\u05DF \u05E4\u05E0\u05D9\u05DE\u05D4 \u05D5\u05DE\u05D0\u05E4\u05E9\u05E8</span>\u05DC\u05DA\n<br />\n<span class=\"about-highlight\">\u05DC\u05E9\u05DE\u05D5\u05E2</span>\u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DE\u05D1\u05E4\u05E0\u05D9\u05DD\n<br />\n<span class=\"about-highlight\">\u05DC\u05E8\u05D0\u05D5\u05EA</span>\u05D0\u05EA \u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D7\u05D9\u05D9\u05DA \u05D1\u05D0\u05D5\u05E8 \u05D0\u05D7\u05E8\n<br />\n<span class=\"about-highlight\">\u05DC\u05EA\u05EA</span>\u05DC\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05D7\u05D9\u05D9\u05DA \u05DC\u05D6\u05E8\u05D5\u05DD \u05D5\u05DC\u05E4\u05E8\u05D5\u05D7\n<br />\n<span class=\"about-highlight\">\u05E7\u05D1\u05DC</span>\u05DB\u05D5\u05D7\u05D5\u05EA \u05D5\u05E2\u05D5\u05E6\u05DE\u05D5\u05EA \u05DC\u05DB\u05DC \u05D0\u05EA\u05D2\u05E8 \u05D1\u05D3\u05E8\u05DA \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05D1\u05DB\u05DC\u05DC\n<br />\n<span class=\"about-highlight\">\u05DC\u05D9\u05D9\u05E9\u05DD \u05DB\u05DC\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1\u05D9\u05DD \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05E0\u05DB\u05D5\u05E0\u05D4 \u05DE\u05D5\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4, \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4, \u05D1\u05DF \u05D6\u05D5\u05D2\u05DA \u05D5\u05E2\u05E6\u05DE\u05DA.</span>\n</p>\n<p>\n\u05D1\u05E7\u05E8\u05D5\u05D1 \u05D9\u05D4\u05D9\u05D4 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E8\u05DB\u05D5\u05E9 \u05D0\u05EA \u05D4\u05E1\u05E4\u05E8 \u05D1\u05D7\u05E0\u05D5\u05D9\u05D5\u05EA \u05D0\u05D5 \u05D1\u05E7\u05E0\u05D9\u05D9\u05D4 \u05D0\u05D5\u05E0\u05DC\u05D9\u05D9\u05DF.\n</p>\n<p>\n\u05D0\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05E9\u05D1\u05E1\u05E4\u05E8 \u05EA\u05D5\u05DB\u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D9\u05E9\u05D9 \u05D5\u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC\u05DA \u05D1\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D9\u05EA\u05D9 \u05D1\u05E9\u05D9\u05DC\u05D5\u05D1 \u05E1\u05D3\u05E0\u05D0 \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA.\n</p>\n<p>\n\u05DC\u05D4\u05D1\u05D9\u05DF \u05D8\u05D5\u05D1 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05D9\u05DA \u05D4\u05D5\u05DC\u05DA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E9\u05D9 \u05D0\u05D9\u05EA\u05D9 \u05DC\u05D7\u05E6\u05D9 \u05DB\u05D0\u05DF\n</p>\n<p>\n\u05DC\u05D4\u05D1\u05D9\u05DF \u05D8\u05D5\u05D1 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05D1\u05E1\u05D3\u05E0\u05D0 \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA \u05DC\u05D7\u05E6\u05D9 \u05DB\u05D0\u05DF\n</p>\n<p>\n<span class=\"about-highlight\">\u05E9\u05DC\u05DA \u05D1\u05D0\u05D4\u05D1\u05D4,</span>\n<br />\n\u05D2\u05DC\u05D9\u05EA.\n</p>"
        };
        return Observable_1.Observable.of(key ? data[key] : data);
    };
    Content = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Content);
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=content.service.js.map