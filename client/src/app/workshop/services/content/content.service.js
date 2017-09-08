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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var Content = (function () {
    function Content(http) {
        this.http = http;
        this.value = 'בשבילי';
    }
    Content.prototype.getData = function (key) {
        var data = {
            aboutWorkshop: "\n\n  <p><span class=\"highlight\">\u05D3\u05DE\u05D9\u05D9\u05E0\u05D9</span> \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05E2\u05D5\u05E9\u05D4 \u05DE\u05D4 \u05E9\u05E0\u05D3\u05E8\u05E9 \u05DE\u05DE\u05DA \u05DC\u05DE\u05E2\u05DF \u05D4\u05D4\u05D9\u05E8\u05D9\u05D5\u05DF \u05D4\u05DE\u05D9\u05D5\u05D7\u05DC \u05E9\u05DC\u05DA \u05D1\u05E8\u05D5\u05D2\u05E2, \u05DC\u05DC\u05D0 \u05DE\u05EA\u05D7, \u05E4\u05D7\u05D3 \u05D5\u05D3\u05D0\u05D2\u05D5\u05EA. \u05DE\u05D1\u05DC\u05D9 \u05DC\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC \u05D3\u05D1\u05E8\u05D9\u05DD \u05E9\u05D7\u05E9\u05D5\u05D1\u05D9\u05DD \u05DC\u05DA \u05DB\u05DE\u05D5 \u05D4\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA, \u05D4\u05E9\u05DE\u05D7\u05D4 \u05E9\u05DC\u05DA, \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4, \u05D7\u05D1\u05E8\u05D9\u05DD, \u05D5\u05E9\u05D0\u05E8 \u05EA\u05D7\u05D5\u05DE\u05D9 \u05D4\u05D7\u05D9\u05D9\u05DD.</p>\n\n  <p><span class=\"highlight start\">\u05DB\u05E9\u05E0\u05EA\u05E7\u05DC\u05EA \u05D1\u05E7\u05D5\u05E9\u05D9 \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF</span> \u05D5\u05E8\u05D0\u05D9\u05EA \u05E9\u05DB\u05D1\u05E8 \u05E2\u05D5\u05D1\u05E8 \u05D6\u05DE\u05DF, \u05D4\u05EA\u05D7\u05DC\u05EA \u05DE\u05D9\u05D3 \u05DC\u05D8\u05E4\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D4\u05D2\u05D5\u05E4\u05E0\u05D9\u05EA \u05D5\u05DB\u05DE\u05D4 \u05E9\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E8. \u05D1\u05D9\u05DF \u05D0\u05DD \u05D6\u05D4 \u05D3\u05E8\u05DA \u05E8\u05E4\u05D5\u05D0\u05D4 \u05D8\u05D1\u05E2\u05D9\u05EA, \u05E7\u05D5\u05E0\u05D1\u05E0\u05E6\u05D9\u05D5\u05E0\u05D0\u05DC\u05D9\u05EA \u05D5/\u05D0\u05D5 \u05EA\u05D6\u05D5\u05E0\u05D4 \u05D5\u05DB\u05D5\u05E9\u05E8, \u05E0\u05EA\u05EA \u05D0\u05EA \u05DE\u05DC\u05D5\u05D0 \u05EA\u05E9\u05D5\u05DE\u05EA \u05D4\u05DC\u05D1 \u05DC\u05E6\u05D3 \u05D4\u05D2\u05D5\u05E4\u05E0\u05D9. \u05D6\u05D4 \u05D0\u05DB\u05DF \u05E6\u05E2\u05D3 \u05D8\u05D1\u05E2\u05D9 \u05D5\u05D2\u05DD \u05E0\u05DB\u05D5\u05DF. \u05D0\u05D1\u05DC, \u05D0\u05D9 \u05E9\u05DD, \u05D4\u05E6\u05D3 \u05D4\u05E0\u05E4\u05E9\u05D9 \u05D4\u05EA\u05DB\u05D5\u05D5\u05E5 \u05DC\u05D5, \u05E0\u05DB\u05E0\u05E1 \u05DC\u05D0\u05D9\u05D6\u05D5 \u05EA\u05D9\u05D1\u05D4 \u05E2\u05DE\u05D5\u05E7 \u05D1\u05EA\u05D5\u05DB\u05DA. \u05D5\u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D5\u05D1 \u05E0\u05D3\u05D7\u05E7 \u05DC\u05DE\u05D8\u05D4 \u05E9\u05DC\u05D0 \u05D9\u05D9\u05E9\u05DE\u05E2, \u05E9\u05DC\u05D0 \u05D9\u05E6\u05D5\u05E5...\n  <br />\n  <br />\n  \u05E2\u05DB\u05E9\u05D9\u05D5, \u05D0\u05EA \u05DE\u05D1\u05D9\u05E0\u05D4 \u05E9\u05DC\u05E7\u05D5\u05DC \u05D4\u05D6\u05D4 \u05D9\u05E9 \u05D4\u05E9\u05E4\u05E2\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DE\u05D0\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05DA \u05D5\u05D0\u05EA \u05E8\u05D5\u05E6\u05D4 \u05DC\u05EA\u05EA \u05DC\u05D5 \u05DE\u05E7\u05D5\u05DD.</p>\n\n  <h4>\u05D1\u05E0\u05D9\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA...</h4>\n  <p>\u05DB\u05E9\u05E2\u05DE\u05D3\u05EA\u05D9 \u05D1\u05E2\u05E6\u05DE\u05D9 \u05DE\u05D5\u05DC \u05D4\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05D4\u05D6\u05D5, \u05D4\u05D2\u05E2\u05EA\u05D9 \u05DC\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D9\u05DD \u05DE\u05D1\u05D7\u05D9\u05E0\u05D4 \u05E0\u05E4\u05E9\u05D9\u05EA \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DE\u05EA\u05E0\u05D4 \u05DC\u05D9\u05DC\u05D3. \u05E8\u05E6\u05D9\u05EA\u05D9 \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05D8\u05D5\u05D1, \u05E4\u05E9\u05D5\u05D8 \u05DC\u05E9\u05DE\u05D5\u05D7 \u05D5\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05EA\u05D9. \u05D4\u05D9\u05D9\u05EA\u05D9 \u05E0\u05D5\u05E4\u05DC\u05EA \u05DB\u05DC \u05E4\u05E2\u05DD \u05DE\u05D7\u05D3\u05E9.\n  <br />\n  \u05E2\u05DD \u05D4\u05D6\u05DE\u05DF, \u05D1\u05E2\u05D6\u05E8\u05EA \u05E9\u05DC\u05D9\u05D7\u05D9\u05DD \u05D8\u05D5\u05D1\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05D5\u05DE\u05D5\u05DB\u05E0\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05E9\u05DC\u05D9, \u05E2\u05D1\u05E8\u05EA\u05D9 \u05E2\u05DD \u05E2\u05E6\u05DE\u05D9 \u05EA\u05D4\u05DC\u05D9\u05DA \u05E9\u05DC\u05DD \u05E9\u05D0\u05D7\u05E8\u05D9\u05D5 \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05D4\u05D9\u05D9\u05EA\u05D9 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05D3\u05DD. \u05E2\u05D3\u05D9\u05D9\u05DF \u05E6\u05D9\u05E4\u05D9\u05EA\u05D9 \u05D5\u05D7\u05D9\u05DB\u05D9\u05EA\u05D9, \u05E2\u05D3\u05D9\u05D9\u05DF \u05D8\u05D9\u05E4\u05DC\u05EA\u05D9 \u05D0\u05D1\u05DC \u05DE\u05D9\u05D5\u05DD \u05DC\u05D9\u05D5\u05DD \u05D6\u05D4 \u05E0\u05E2\u05E9\u05D4 \u05DE\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05E8, \u05D1\u05D7\u05E9\u05D9\u05D1\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05D1\u05E1\u05D3\u05E8 \u05DB\u05E4\u05D9 \u05E9\u05D0\u05E0\u05D9,  \u05E9\u05DC\u05DE\u05D4 \u05E2\u05DD \u05E2\u05E6\u05DE\u05D9, \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3 \u05E9\u05E7\u05D9\u05D1\u05DC\u05EA\u05D9. \u05D4\u05D9\u05D5\u05DD \u05D9\u05E9 \u05DC\u05D9 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D9\u05DC\u05D3\u05D9\u05DD \u05DE\u05EA\u05D5\u05E7\u05D9\u05DD, \u05D0\u05E0\u05D9 \u05E9\u05DE\u05D7\u05D4 \u05D1\u05DE\u05D4 \u05E9\u05D9\u05E9 \u05DC\u05D9 \u05D5\u05E4\u05EA\u05D5\u05D7\u05D4 \u05DC\u05E7\u05D1\u05DC \u05E2\u05D5\u05D3.\n  <br />\n  \u05D4\u05D9\u05D5\u05DD \u05D0\u05E0\u05D9 \u05D9\u05D5\u05D3\u05E2\u05EA \u05DC\u05E9\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05DE\u05D9\u05E8\u05D5\u05EA \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA \u05DE\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05E0\u05DB\u05D5\u05DF \u05DE\u05D1\u05DC\u05D9 \u05DC\u05D4\u05D9\u05E4\u05D2\u05E2. \u05D1\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05D4\u05E9\u05D9\u05D7 \u05D1\u05D9\u05E0\u05D9\u05E0\u05D5 \u05D4\u05D5\u05D0 \u05DE\u05EA\u05D5\u05DA \u05D4\u05D1\u05E0\u05D4, \u05E7\u05D1\u05DC\u05D4 \u05D5\u05E4\u05EA\u05D9\u05D7\u05D5\u05EA.\n  <br />\n  \u05D1\u05E2\u05E7\u05D1\u05D5\u05EA \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D5\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D4\u05DB\u05E9\u05E8\u05D4 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4, \u05DB\u05D9\u05D5\u05DD \u05D0\u05E0\u05D9 \u05DE\u05DB\u05D5\u05D5\u05E0\u05EA \u05E0\u05E9\u05D9\u05DD \u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA, \u05DE\u05E8\u05E6\u05D4 \u05D5\u05DE\u05E0\u05D7\u05EA \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA.\n  </p>\n  <p>\n  <span class=\"highlight start\">\u05D2\u05DD \u05D0\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05DE\u05E7\u05D5\u05DD \u05D4\u05E0\u05E4\u05DC\u05D0 \u05D4\u05D6\u05D4!</span>\n  </p>\n  <p>\n  \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05E1\u05D5\u05D3\u05E8 \u05D5\u05DE\u05D5\u05D1\u05E0\u05D4 \u05D5\u05E2\u05D3\u05D9\u05D9\u05DF \u05D2\u05DE\u05D9\u05E9 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DC\u05E2\u05D5\u05DC\u05DD \u05E9\u05DC\u05DA \u05D0\u05EA \u05DE\u05E7\u05D1\u05DC\u05EA \u05DC\u05D9\u05D5\u05D5\u05D9 \u05EA\u05D5\u05DA \u05D4\u05E7\u05E9\u05D1\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05DC\u05E7\u05D5\u05DC \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9 \u05E9\u05DC\u05DA, \u05D1\u05D0\u05D5\u05E4\u05DF \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC\u05DA \u05D5\u05DC\u05D0\u05D5\u05E8\u05D7 \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA. \u05D6\u05D4\u05D5 \u05EA\u05D4\u05DC\u05D9\u05DA \u05E9\u05DE\u05D1\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DC\u05DC\u05D0 \u05E9\u05D9\u05E4\u05D5\u05D8\u05D9\u05D5\u05EA.\n  <br />\n  \u05D4\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05DE\u05D5\u05DC \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4, \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4, \u05D4\u05E8\u05E4\u05D5\u05D0\u05D4, \u05D1\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05DE\u05D5\u05DC \u05E2\u05E6\u05DE\u05DA.\n  <br />\n  \u05EA\u05D4\u05DC\u05D9\u05DA \u05E4\u05E0\u05D9\u05DE\u05D9 \u05DE\u05D5\u05D1\u05E0\u05D4 \u05D9\u05D9\u05E6\u05D5\u05E8 \u05D1\u05DA \u05D0\u05D3\u05DD \u05D7\u05D3\u05E9 \u05E4\u05D9\u05D6\u05D9\u05EA \u05D5\u05E0\u05E4\u05E9\u05D9\u05EA. \u05D5\u05D4\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D4\u05D6\u05D4 \u05D9\u05E9\u05E4\u05D9\u05E2 \u05DC\u05D8\u05D5\u05D1\u05D4 \u05E2\u05DC \u05D4\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA. \u05DB\u05D5\u05DC\u05DC \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD.</p>\n\n  <p>\n  \u05DE\u05EA\u05E2\u05E0\u05D9\u05D9\u05E0\u05EA? \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E8\u05E9\u05DD? \u05E8\u05D5\u05E6\u05D4 \u05E2\u05D5\u05D3 \u05E4\u05E8\u05D8\u05D9\u05DD? <a href=\"/contact/\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8 \u05DB\u05D0\u05DF</a>\n  </p>\n\n  <h4>\u05DE\u05D4 \u05D4\u05E7\u05E9\u05E8 \u05D1\u05D9\u05DF \u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05D1\u05D9\u05DF \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF?!</h4>\n  <p>\u05D6\u05D5 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D4\u05E9\u05D0\u05DC\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05E9\u05D0\u05DC\u05EA\u05D9 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D9 \u05DB\u05E9\u05D2\u05D9\u05DC\u05D9\u05EA\u05D9 \u05D0\u05EA \u05D4\u05E7\u05E9\u05E8 \u05DC\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4! \u05DE\u05E1\u05EA\u05D1\u05E8 \u05E9\u05D9\u05E9 \u05E7\u05E9\u05E8.\n  <br />\n  \u05D5\u05DE\u05E1\u05EA\u05D1\u05E8 \u05E9\u05D6\u05D4 \u05E2\u05D1\u05D3 \u05D2\u05DD \u05E2\u05DC\u05D9 \u05D5\u05D2\u05DD \u05E2\u05DC \u05E0\u05E9\u05D9\u05DD \u05E8\u05D1\u05D5\u05EA \u05E9\u05DC\u05D9\u05D5\u05D5\u05D9\u05EA\u05D9 \u05D5\u05D6\u05DB\u05D5 \u05DC\u05D4\u05E8\u05D5\u05EA \u05D5\u05DC\u05DC\u05D3\u05EA.\n  <br />\n  <strong>\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3?</strong>\n  <br />\n  \u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD, \u05D5\u05D1\u05D9\u05D9\u05D7\u05D5\u05D3 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA, \u05D4\u05D2\u05D5\u05E3 \u05D5\u05D4\u05E0\u05E4\u05E9 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D9\u05D7\u05D3. \u05DB\u05DC \u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4 \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05D4\u05E0\u05E4\u05E9 \u05D5\u05DC\u05D4\u05D9\u05E4\u05DA. \u05DC\u05E8\u05D5\u05D1, \u05DB\u05D0\u05E9\u05E8 \u05D4\u05D6\u05DE\u05DF \u05E2\u05D5\u05D1\u05E8 \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05DC\u05D4\u05E8\u05D5\u05EA \u05DB\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D6\u05D4 \u05D0\u05D7\u05E8 \u05D6\u05D4, \u05D4\u05E8\u05D2\u05E9\u05D5\u05EA \u05E9\u05DE\u05DE\u05DC\u05D0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA, \u05DE\u05E9\u05E4\u05D9\u05E2\u05D9\u05DD \u05DE\u05D9\u05D3\u05D9\u05EA \u05E2\u05DC \u05D4\u05E0\u05E4\u05E9 \u05E9\u05DC\u05DA. \u05D4\u05D9\u05D0 \u05E0\u05D1\u05D4\u05DC\u05EA \u05D5\u05DE\u05EA\u05DB\u05D5\u05D5\u05E6\u05EA \u05D5\u05D0\u05D6 \u05D2\u05DD \u05D4\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05E7\u05D5\u05D5\u05D4, \u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D5\u05EA, \u05D0\u05DE\u05D5\u05E0\u05D4 \u05D5\u05E9\u05DE\u05D7\u05D4 \u05E0\u05D5\u05EA\u05E8 \u05E7\u05D8\u05DF \u05D5\u05DE\u05DB\u05D5\u05D5\u05E5.\n  <br />\n  \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05D0 \u05DC\u05E4\u05EA\u05D5\u05D7, \u05DC\u05E4\u05E8\u05D5\u05E5 \u05D5\u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA. \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05E0\u05D5\u05D2\u05E2 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E7\u05D5\u05DD \u05E4\u05E0\u05D9\u05DE\u05D9 \u05E9\u05DC \u05D4\u05E0\u05E4\u05E9, \u05D9\u05D5\u05E6\u05E8 \u05E2\u05D1\u05D5\u05E8\u05D4 \u05DE\u05E8\u05D7\u05D1 \u05DC\u05D4\u05E9\u05DE\u05D9\u05E2 \u05E8\u05D2\u05E9\u05D5\u05EA, \u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D5\u05DC\u05D1\u05D8\u05D0 \u05DE\u05D4 \u05E9\u05D4\u05D9\u05D0 \u05D7\u05D5\u05D5\u05D4. \u05DB\u05DC \u05D6\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D5\u05EA \u05D4\u05D0\u05DE\u05EA\u05D9\u05EA \u05E9\u05DC\u05D4, \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D6\u05E8\u05D9\u05DE\u05D4 \u05D5\u05E9\u05D7\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E4\u05DC\u05D0\u05D9\u05DD \u05DE\u05D0\u05D9\u05DF \u05DB\u05DE\u05D5\u05EA\u05DD.\n  <br />\n  \u05D0\u05D6 \u05D4\u05D9\u05D0 \u05DE\u05E9\u05E4\u05D9\u05E2\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D5\u05E3 \u05E9\u05D2\u05DD \u05D7\u05D5\u05D6\u05E8 \u05DC\u05D7\u05D9\u05D5\u05EA, \u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05D6\u05E8\u05D9\u05DE\u05D4.\n  <br />\n  <span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05E8\u05D5\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D0\u05D7\u05E8\u05EA\n  <br />\n  <span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05E0\u05E8\u05D0\u05D4 \u05DB\u05DC \u05DB\u05DA \u05E8\u05D7\u05D5\u05E7\n  <br />\n  <span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05E4\u05E1 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD \u05D1\u05DE\u05DB\u05DC\u05D5\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA\n  <br />\n  <span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05D9\u05E9 \u05D7\u05D9\u05D9\u05DD!\n  </p>\n\n  <h4>\u05D7\u05DC\u05E7 \u05DE\u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05E9\u05D9\u05D8\u05D4 \u05D0\u05D9\u05EA\u05D4 \u05D0\u05E0\u05D9 \u05E2\u05D5\u05D1\u05D3\u05EA:</h4>\n  <ul>\n  <li>\u05E2\u05D9\u05DF \u05D8\u05D5\u05D1\u05D4</li>\n  \u05D1\u05D2\u05D9\u05E9\u05D4 \u05E9\u05DC \u05D0\u05D9\u05DE\u05D5\u05DF \u05D9\u05D4\u05D5\u05D3\u05D9 \u05D4\u05D1\u05E1\u05D9\u05E1 \u05D4\u05D5\u05D0 \u05DE\u05E8\u05D7\u05D1 \u05E9\u05DC \u05DB\u05E3 \u05D6\u05DB\u05D5\u05EA \u05E9\u05D3\u05E8\u05DB\u05D5 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D2\u05E9\u05EA \u05DC\u05DB\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05EA\u05D5\u05DA \u05E8\u05D0\u05D9\u05D9\u05D4 \u05E9\u05D9\u05E9 \u05DB\u05D0\u05DF \u05E8\u05E6\u05D5\u05DF \u05D8\u05D5\u05D1, \u05D0\u05D3\u05DD \u05D8\u05D5\u05D1 \u05D5\u05DE\u05DB\u05D5\u05D7 \u05D4\u05D8\u05D5\u05D1 \u05E6\u05D5\u05DE\u05D7\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E8 \u05D5\u05D1\u05E7\u05DC\u05D5\u05EA.\n  <li>\u05E2\u05E7\u05D1 \u05D1\u05E6\u05D3 \u05D0\u05D2\u05D5\u05D3\u05DC</li>\n  \u05D4\u05E9\u05D9\u05D8\u05D4 \u05DE\u05D7\u05E9\u05D9\u05D1\u05D4 \u05D2\u05DD \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05D0\u05DC \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D5\u05D2\u05DD \u05D0\u05EA \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D1\u05E2\u05E6\u05DE\u05D4. \u05DB\u05DA \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D5\u05DE\u05D3\u05D5\u05EA \u05DC\u05D4\u05D5\u05E7\u05D9\u05E8 \u05DB\u05DC \u05E6\u05E2\u05D3 \u05E7\u05D8\u05DF \u05D1\u05D3\u05E8\u05DA \u05D1\u05DC\u05D9 \u05DC\u05D4\u05EA\u05E4\u05EA\u05D5\u05EA \u05DC\u05E6\u05E2\u05D3\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05D5\u05D3\u05E8\u05E1\u05D8\u05D9\u05D9\u05DD. \u05DC\u05E9\u05DE\u05D5\u05D7 \u05DE\u05E2\u05E6\u05DD \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA.\n  <li>\u05E9\u05D9\u05EA\u05D5\u05E3 \u05E2\u05DE\u05D5\u05E7 \u05D5\u05E9\u05D9\u05EA\u05D5\u05E3 \u05E8\u05D5\u05D7\u05D1\u05D9</li>\n  \u05D4\u05D4\u05D7\u05DC\u05D8\u05D4 \u05DC\u05E6\u05D0\u05EA \u05DE\u05DE\u05D7\u05D1\u05D5\u05D0 \u05D4\u05D1\u05D5\u05E9\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E9\u05D9\u05EA\u05D5\u05E3 \u05D0\u05D7\u05E8\u05D9\u05DD \u05DE\u05E8\u05D7\u05D9\u05D1\u05D4 \u05D0\u05EA \u05DE\u05E2\u05D2\u05DC \u05D4\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E9\u05DC\u05E0\u05D5 \u05DE\u05E1\u05D1\u05D9\u05D1.\n  <li>\u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05D5\u05DB\u05D7\u05EA \u05D1\u05E8\u05D2\u05E9</li>\n  \u05DB\u05E9\u05D0\u05EA \u05DE\u05E8\u05E9\u05D4 \u05DC\u05E2\u05E6\u05DE\u05DA \u05DC\u05D1\u05DB\u05D5\u05EA \u05DB\u05E9\u05E2\u05E6\u05D5\u05D1 \u05D5\u05E7\u05E9\u05D4, \u05DC\u05E9\u05DE\u05D5\u05D7 \u05DB\u05E9\u05D8\u05D5\u05D1, \u05D5\u05D1\u05DB\u05DC\u05DC, \u05DC\u05D1\u05D8\u05D0 \u05DB\u05DC \u05E8\u05D2\u05E9 \u05E9\u05E2\u05D5\u05D1\u05E8 \u05D1\u05E4\u05E0\u05D9\u05DD, \u05D1\u05D6\u05DE\u05DF \u05D5\u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05E0\u05DB\u05D5\u05DF, \u05D0\u05EA \u05E4\u05D5\u05E8\u05E7\u05EA \u05D0\u05EA \u05D4\u05DE\u05D8\u05E2\u05E0\u05D9\u05DD \u05E9\u05D4\u05E6\u05D8\u05D1\u05E8\u05D5 \u05D1\u05E4\u05E0\u05D9\u05DD \u05D5\u05D1\u05DB\u05DA \u05DC\u05E4\u05E0\u05D5\u05EA \u05DE\u05E7\u05D5\u05DD \u05DC\u05DE\u05E9\u05D4\u05D5 \u05D8\u05D5\u05D1.\n  <li>\u05D4\u05E7\u05E9\u05D1\u05D4 \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05D7\u05D5\u05E1\u05DE\u05D5\u05EA </li>\n  \u05E0\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA \u05D5\u05D4\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05D7\u05D5\u05E1\u05DE\u05D5\u05EA. \u05DB\u05D9\u05E6\u05D3 \u05D4\u05DF \u05DE\u05E0\u05D4\u05DC\u05D5\u05EA \u05D0\u05D5\u05EA\u05DA \u05D5\u05D2\u05D5\u05E8\u05DE\u05D5\u05EA \u05DC\u05DA \u05DC\u05E4\u05E2\u05D5\u05DC \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E9\u05D1\u05D4 \u05D0\u05EA \u05E4\u05D5\u05E2\u05DC\u05EA \u05D5\u05DC\u05D7\u05E9\u05D5\u05D1 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D1\u05D5 \u05D0\u05EA \u05D7\u05D5\u05E9\u05D1\u05EA. \u05E0\u05E9\u05D9\u05DD \u05DC\u05D1 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC \u05DC\u05E6\u05DE\u05D5\u05D7 \u05DE\u05EA\u05D5\u05DB\u05DA \u05D3\u05E8\u05DA \u05D4\u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA.\n  <li>\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA \u05D6\u05D5\u05D2\u05D9\u05EA \u05E0\u05DB\u05D5\u05E0\u05D4 \u2013 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05E0\u05E7\u05D1\u05DC \u05DB\u05DC\u05D9\u05DD \u05DC\u05D1\u05E0\u05D5\u05EA \u05E0\u05DB\u05D5\u05DF \u05E2\u05D5\u05D2\u05DF \u05D6\u05D5\u05D2\u05D9, \u05DC\u05D7\u05D6\u05E7 \u05D0\u05EA \u05D4\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05D5\u05D0\u05EA \u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05EA\u05DE\u05D5\u05DA \u05D0\u05D7\u05D3 \u05D1\u05E9\u05E0\u05D9 \u05D1\u05D6\u05DE\u05DF \u05D4\u05D4\u05DE\u05EA\u05E0\u05D4 \u05DC\u05D9\u05DC\u05D3, \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05D8\u05DC\u05D8\u05DC\u05D5\u05EA.</li>\n  </ul>\n\n  <p>\n  <span class=\"highlight start\">\u05DE\u05EA\u05DC\u05D1\u05D8\u05EA \u05D0\u05DD \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DA?</span>\n  <br />\n  \u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8 \u05D5\u05EA\u05E7\u05D1\u05E2\u05D9 \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DB\u05E2\u05EA \u05DC\u05DC\u05D0 \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05D5\u05DC\u05DC\u05D0 \u05EA\u05E9\u05DC\u05D5\u05DD\n  <br />\n  <span class=\"highlight start\">\u05EA\u05DB\u05E0\u05D9\u05EA \u05D4\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D4\u05DE\u05DC\u05D0\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA:</span>\n  <ul>\n  <li>15 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD</li>\n  <li>\u05E9\u05D9\u05E2\u05D5\u05E8\u05D9 \u05D5\u05D9\u05D3\u05D9\u05D0\u05D5 \u05D5\u05D4\u05E8\u05E4\u05D9\u05D5\u05EA \u05D1\u05D3\u05DE\u05D9\u05D5\u05DF</li>\n  <li>\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \u05D3\u05E8\u05DA \u05E9\u05D9\u05D7\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05D5\u05EA</li>\n  </ul>\n  <br />\n  \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05D6\u05D0\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05D4\u05DB\u05E9\u05E8\u05EA\u05D9 \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05DB\u05DE\u05DB\u05D5\u05D5\u05E0\u05EA \u05D1\u05D9\u05D7\u05D3 \u05E2\u05DD \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D9 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05D5\u05D4\u05D9\u05D0 \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA. \u05D0\u05EA \u05E2\u05D5\u05D1\u05E8\u05EA \u05D1\u05D4 \u05D4\u05EA\u05D7\u05D3\u05E9\u05D5\u05EA \u05D5\u05E6\u05DE\u05D9\u05D7\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA \u05D5\u05D0\u05DE\u05EA\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05D4\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u05DC\u05DA.\n  </p>\n\n  <p>\n  \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05D6\u05D5 \u05D0\u05EA \u05DC\u05D5\u05DE\u05D3\u05EA:\n  \u05DC\u05E0\u05D4\u05DC \u05D7\u05D9\u05D9\u05DD \u05D9\u05E6\u05D9\u05D1\u05D9\u05DD \u05D5\u05E4\u05D5\u05E8\u05D9\u05D9\u05DD \u05D2\u05DD \u05DB\u05E9\u05D4\u05D4\u05D9\u05E8\u05D9\u05D5\u05DF \u05E2\u05D3\u05D9\u05D9\u05DF \u05D1\u05D3\u05E8\u05DA\n  \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05D8\u05D9\u05E4\u05D5\u05DC\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA (\u05DB\u05E9\u05E6\u05E8\u05D9\u05DA) \u05DE\u05EA\u05D5\u05DA \u05E8\u05D5\u05D2\u05E2 \u05D5\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF\n  \u05DC\u05D4\u05D0\u05DE\u05D9\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D1\u05D2\u05D5\u05E3 \u05E9\u05DC\u05DA \u05D5\u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05E9\u05DC\u05D5 \u05DC\u05D4\u05E8\u05D5\u05EA\n  \u05DC\u05D0\u05D4\u05D5\u05D1 \u05D0\u05EA \u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05DB\u05E4\u05D9 \u05E9\u05D4\u05D9\u05D0\n  \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF \u05E7\u05D5\u05D3\u05DD \u05DE\u05D4\u05E8\u05D0\u05E9 \u05D5\u05D4\u05EA\u05D5\u05D3\u05E2\u05D4\n  \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05D1\u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA \u05D5\u05E2\u05DD \u05D4\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA \u05D1\u05DB\u05DC \u05DE\u05E6\u05D1\n  \u05DC\u05E9\u05D9\u05DD \u05E7\u05E5 \u05DC\u05DB\u05E2\u05E1, \u05DC\u05EA\u05E1\u05DB\u05D5\u05DC \u05D5\u05DC\u05E8\u05D2\u05E9\u05D9 \u05D4\u05E0\u05D7\u05D9\u05EA\u05D5\u05EA\n  \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DC\u05DC\u05D0 \u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DC\u05D0\u05D7\u05E8\u05D5\u05EA\n  </p>\n\n  <p>\n  \u05D4\u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA \u05E9\u05DC\u05DA \u05D1\u05EA\u05DB\u05E0\u05D9\u05EA \u05D4\u05DE\u05DC\u05D0\u05D4, \u05D3\u05E8\u05DA \u05E7\u05D1\u05D5\u05E6\u05D4 \u05D5\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9, \u05EA\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05EA\u05EA \u05DE\u05E7\u05D5\u05DD \u05DC\u05E8\u05D2\u05E9\u05D5\u05EA, \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA, \u05DC\u05D0\u05DE\u05D5\u05E0\u05D5\u05EA \u05D5\u05DC\u05E8\u05E6\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05DA. \u05D4\u05DE\u05E7\u05D5\u05DD \u05D4\u05E0\u05E4\u05E9\u05D9 \u05D4\u05DE\u05DB\u05D5\u05D5\u05E5 \u05D9\u05EA\u05D7\u05D9\u05DC \u05DC\u05D4\u05D9\u05E4\u05EA\u05D7 \u05D5\u05DC\u05D4\u05E9\u05EA\u05D7\u05E8\u05E8. \u05D5\u05D0\u05D6 \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E0\u05E4\u05E9 \u05DE\u05E9\u05D5\u05D7\u05E8\u05E8\u05EA, \u05D6\u05D4 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05DC\u05D8\u05D5\u05D1\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D5\u05E3. \u05D0\u05E0\u05D9 \u05DE\u05DE\u05E9 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05D6\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05DB\u05DC \u05D4\u05D6\u05DE\u05DF \u05D0\u05E6\u05DC \u05E0\u05E9\u05D9\u05DD \u05E9\u05D0\u05E0\u05D9 \u05DE\u05DB\u05D5\u05D5\u05E0\u05EA.\n  </p>\n  <p>\n  \u05D4\u05E6\u05D8\u05E8\u05E4\u05D9 \u05DC\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D5\u05DC\u05D2\u05DC\u05D5\u05EA \u05D0\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D9 \u05E9\u05D0\u05EA \u05D1\u05D0\u05DE\u05EA \u05D0\u05D9\u05DA \u05DC\u05E7\u05D1\u05DC \u05D5\u05DC\u05D0\u05D4\u05D5\u05D1 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DB\u05E4\u05D9 \u05E9\u05D0\u05EA, \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05DC\u05D9\u05D8\u05D4 \u05DC\u05D7\u05D9\u05D9\u05DA, \u05DC\u05D7\u05D5\u05E9 \u05D4\u05E7\u05DC\u05D4 \u05D5\u05E9\u05DE\u05D7\u05D4 \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA \u05D5\u05D1\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA \u05E9\u05D9\u05D0\u05E4\u05E9\u05E8\u05D5 \u05DC\u05D4\u05D9\u05E8\u05D9\u05D5\u05DF \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DE\u05EA\u05D5\u05DA \u05E8\u05D5\u05D2\u05E2 \u05D5\u05E9\u05DC\u05D5\u05D5\u05D4. \u05D5\u05DC\u05D3\u05E2\u05EA \u05D0\u05D9\u05DA \u05DC\u05E7\u05D1\u05DC \u05DB\u05DC \u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D1\u05DC\u05D9 \"\u05DC\u05D4\u05EA\u05E8\u05E1\u05E7\".\n  </p>\n  <p>\n  \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA:\n  \u05D0\u05E0\u05D9 \u05DE\u05E6\u05D9\u05E2\u05D4 \u05DC\u05DA \u05D2\u05DD \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4, \u05D0\u05DD \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA, \u05DC\u05D0 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DA \u05DE\u05D0\u05D9\u05D6\u05D5\u05E9\u05D4\u05D9 \u05E1\u05D9\u05D1\u05D4 \u05DB\u05E1\u05E4\u05DA \u05D9\u05D5\u05D7\u05D6\u05E8 \u05DC\u05DA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D4\u05E1\u05D1\u05E8\u05D9\u05DD. \u05D0\u05E0\u05D9 \u05DB\u05DC \u05DB\u05DA \u05D1\u05D8\u05D5\u05D7\u05D4 \u05D1\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05DB\u05DA \u05E9\u05D0\u05EA\u05DF \u05DC\u05DA \u05D2\u05DD \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05E2\u05E6\u05DE\u05DA.\n  </p>\n\n  <br />\n\n  <p>\n  <span class=\"highlight start\">\u05DE\u05D4 \u05E2\u05DC\u05D9\u05DA \u05DC\u05E2\u05E9\u05D5\u05EA?</span>\n  \u05EA\u05E7\u05D1\u05E2\u05D9 \u05DB\u05D1\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05DC\u05DC\u05D0 \u05E2\u05DC\u05D5\u05EA \u05D5\u05DC\u05D0 \u05DB\u05DC \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA.\n  \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05D1\u05D0\u05D4 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05D1- 8.5, \u05D9\"\u05D1 \u05D0\u05D9\u05D9\u05E8, \u05D5\u05EA\u05EA\u05E7\u05D9\u05D9\u05DD \u05D1\u05E1\u05D8\u05D5\u05D3\u05D9\u05D5 \u05DB\u05E4\u05E8\u05D9 \u05D1\u05D0\u05D9\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF.\n  <br />\n  <a href=\"/contact\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5</a>! \u05E2\u05E9\u05D9 \u05E6\u05E2\u05D3 \u05D2\u05D3\u05D5\u05DC \u05DC\u05D8\u05D5\u05D1\u05EA \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05D5\u05D4\u05E6\u05D8\u05E8\u05E4\u05D9 \u05DC\u05EA\u05DB\u05E0\u05D9\u05EA!\n  </p>\n\n  <p>\n  \u05DE\u05D7\u05DB\u05D4 \u05DC\u05DA,\n  \u05D2\u05DC\u05D9\u05EA \u05E4\u05E8\u05D9\u05D3\u05DE\u05DF\n  \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E0\u05E9\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DC\u05D4\u05D9\u05E8\u05D9\u05D5\u05DF\n  </p>\n  "
        };
        return Observable_1.Observable.of(key ? data[key] : data);
    };
    return Content;
}());
Content = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Content);
exports.Content = Content;
//# sourceMappingURL=content.service.js.map