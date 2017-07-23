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
var platform_browser_1 = require("@angular/platform-browser");
var YoutubeComponent = (function () {
    function YoutubeComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.big = false;
    }
    YoutubeComponent.prototype.ngOnInit = function () {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.id + "?rel=0");
    };
    return YoutubeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], YoutubeComponent.prototype, "id", void 0);
YoutubeComponent = __decorate([
    core_1.Component({
        selector: 'youtube',
        styles: ["\n    .youtube-wrapper {\n      margin: 0;\n      position: relative;\n      padding-bottom: 56.25%; /* 16:9 */\n      padding-top: 25px;\n      height: 0;\n      width: 100%;\n    }\n    .youtube-wrapper iframe {\n    \tposition: absolute;\n    \ttop: 0;\n    \tleft: 0;\n    \twidth: 100%;\n    \theight: 100%;\n    }\n  "],
        template: "\n  <div class=\"youtube-wrapper\">\n    <iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>"
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], YoutubeComponent);
exports.YoutubeComponent = YoutubeComponent;
//# sourceMappingURL=youtube.component.js.map