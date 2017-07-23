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
var TagService = (function () {
    function TagService(http) {
        this.http = http;
        this.data = [];
    }
    TagService.prototype.loadData = function (force) {
        if (force === void 0) { force = false; }
        if (!force && this.data.length > 0) {
            return;
        }
        this.data = [
            { id: 0, name: "פוריות" },
            { id: 1, name: "זוגיות" },
            { id: 2, name: "בטחון עצמי" },
            { id: 3, name: "הוויה" },
            { id: 4, name: "מחשבות" },
            { id: 5, name: "רגשות" },
            { id: 6, name: "דימוי גוף" },
            { id: 7, name: "יחסים במשפחה ובחברה" },
            { id: 8, name: "רפואה" },
            { id: 9, name: "הלכה" },
            { id: 10, name: "גוף-נפש" },
            { id: 11, name: "עשייה פורייה" },
            { id: 12, name: "שמחה והודיה" }
        ];
    };
    TagService.prototype.getData = function (list) {
        this.loadData();
        console.log(list);
        if (list && list.length === 0)
            return Observable_1.Observable.of(this.data);
        return Observable_1.Observable.of(this.data.filter(function (item) { return list.indexOf(item.id) >= 0; }));
    };
    return TagService;
}());
TagService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map