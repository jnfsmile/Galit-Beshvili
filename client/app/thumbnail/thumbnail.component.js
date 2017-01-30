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
console.log('`Thumbnail` component loaded asynchronously');
var ThumbnailComponent = (function () {
    function ThumbnailComponent() {
        this.big = false;
    }
    ThumbnailComponent.prototype.addBigClass = function () {
        this.big = !this.big;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ThumbnailComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ThumbnailComponent.prototype, "alt", void 0);
    ThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'thumbnail',
            styles: ["\n  .thumbnail-wrapper {\n    margin: auto;\n    text-align: center;\n  }\n  .thumbnail-wrapper > div {\n    display: inline-block;\n    position: relative;\n  }\n  .thumbnail-wrapper > div:not(.big):hover:before {\n    content: \" \";\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.4;\n  }\n  [data-thumbnail] {\n    width: 4em;\n    transition: width 1s;\n  }\n  .big [data-thumbnail] {\n    width: 80%;\n  }"],
            template: "\n  <div class=\"thumbnail-wrapper\">\n    <div (click)=\"addBigClass()\" [ngClass]=\"{'big': big}\" title=\"\u05DC\u05D7\u05E6\u05D9 \u05DC\u05D4\u05D2\u05D3\u05DC\u05D4\">\n      <img [src]=\"src\" [alt]=\"alt\" data-thumbnail />\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());
exports.ThumbnailComponent = ThumbnailComponent;
//# sourceMappingURL=thumbnail.component.js.map