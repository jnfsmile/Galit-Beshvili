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
var index_1 = require("./services/content/index");
var MediaComponent = (function () {
    function MediaComponent(content) {
        this.content = content;
        this.pageContent = "";
    }
    MediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.getData("media").subscribe(function (res) { return _this.pageContent = res; });
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    core_1.Component({
        selector: 'media',
        providers: [index_1.Content],
        template: "\n      <section class=\"page media\">\n        <h3>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 \u05D1\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA</h3>\n        <div [innerHTML]=\"pageContent\"></div>\n      </section>\n  ",
    }),
    __metadata("design:paramtypes", [index_1.Content])
], MediaComponent);
exports.MediaComponent = MediaComponent;
//# sourceMappingURL=media.component.js.map