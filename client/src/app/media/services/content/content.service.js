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
            media: "<p><a href=\"http://www.inn.co.il/News/News.aspx/341421\">\u05E8\u05D0\u05D9\u05D5\u05DF \u05DC\u05E8\u05D2\u05DC \u05D9\u05E6\u05D9\u05D0\u05EA\u05D5 \u05E9\u05DC \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\" - \u05E2\u05E8\u05D5\u05E5 7</a></p>\n        <p><a href=\"http://www.hidabroot.org/article/218318\">\u05E8\u05D0\u05D9\u05D5\u05DF \u05DC\u05E8\u05D2\u05DC \u05D9\u05E6\u05D9\u05D0\u05EA\u05D5 \u05E9\u05DC \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\" - \u05D0\u05EA\u05E8 \u05D4\u05D9\u05D3\u05D1\u05E8\u05D5\u05EA</a></p>\n        <p><a href=\"http://www.israelnationalnews.com/News/News.aspx/226091\">(\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA) \u05E8\u05D0\u05D9\u05D5\u05DF \u05DC\u05E8\u05D2\u05DC \u05D9\u05E6\u05D9\u05D0\u05EA\u05D5 \u05E9\u05DC \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\" - \u05E2\u05E8\u05D5\u05E5 7</a></p>\n        "
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