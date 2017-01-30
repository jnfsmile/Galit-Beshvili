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
var index_1 = require('./services/content/index');
var BookComponent = (function () {
    function BookComponent(content) {
        this.content = content;
        this.bookContent = "אודות הספר";
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.getData("aboutBook").subscribe(function (res) { return _this.bookContent = res; });
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book',
            providers: [index_1.Content],
            template: "\n      <section class=\"page book\">\n        <h2>\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA</h2>\n        <p>\n          <thumbnail src=\"/assets/images/book-cover.jpg\" alt=\"\u05DB\u05E8\u05D9\u05DB\u05D4 \u05E9\u05DC \u05D4\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\"></thumbnail>\n        </p>\n        <div [innerHTML]=\"bookContent\"></div>\n      </section>\n  ",
        }), 
        __metadata('design:paramtypes', [index_1.Content])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map