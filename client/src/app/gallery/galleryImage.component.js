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
var GalleryImageComponent = (function () {
    function GalleryImageComponent() {
        this.big = false;
    }
    GalleryImageComponent.prototype.addBigClass = function () {
        this.big = !this.big;
    };
    return GalleryImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GalleryImageComponent.prototype, "src", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GalleryImageComponent.prototype, "alt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GalleryImageComponent.prototype, "map", void 0);
GalleryImageComponent = __decorate([
    core_1.Component({
        selector: 'gallery-image',
        styles: ["\n  .gallery-image-wrapper {\n    margin: auto;\n    text-align: center;\n  }\n  .gallery-image-wrapper > div {\n    display: inline-block;\n    position: relative;\n  }\n  /*.gallery-image-wrapper > div:not(.big):hover:before {\n    content: \" \";\n    cursor: pointer;\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.4;\n  }*/\n  [data-gallery-image] {\n    width: 80%;\n    cursor: pointer;\n    /*transition: all 1s;*/\n  }\n  .big:before {\n    content: \" \";\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.4;\n  }\n  .big [data-gallery-image] {\n    width: 60vw;\n    position: fixed;\n    top: 5vh;\n    right: 20vw;\n  }"],
        template: "\n  <div class=\"gallery-image-wrapper\">\n    <div (click)=\"addBigClass()\" [ngClass]=\"{'big': big}\" title=\"\u05DC\u05D7\u05E6\u05D9 \u05DC\u05D4\u05D2\u05D3\u05DC\u05D4\">\n      <img [src]=\"src\" [alt]=\"alt\" [attr.usemap]=\"'#' + map\" data-gallery-image />\n    </div>\n  </div>\n"
    })
], GalleryImageComponent);
exports.GalleryImageComponent = GalleryImageComponent;
//# sourceMappingURL=galleryImage.component.js.map