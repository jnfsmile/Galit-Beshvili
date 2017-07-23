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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var index_1 = require("./services/content/index");
var CreativeComponent = (function () {
    function CreativeComponent(route, router, content) {
        this.route = route;
        this.router = router;
        this.content = content;
        this.contentArray = [];
        this.selectedContent = {};
        this.currentId = "";
    }
    CreativeComponent.prototype.songs = function () {
        return this.contentArray.filter(function (s) { return s.type === 'song'; });
    };
    CreativeComponent.prototype.stories = function () {
        return this.contentArray.filter(function (s) { return s.type === 'story'; });
    };
    CreativeComponent.prototype.shorts = function () {
        return this.contentArray.filter(function (s) { return s.type === 'short'; });
    };
    CreativeComponent.prototype.onSelect = function (item) {
        this.router.navigate(['/creative', { id: item.id }]);
    };
    CreativeComponent.prototype.setContent = function (id) {
        if (!id)
            return;
        var item = this.contentArray.filter(function (c) { return c.id == id; })[0];
        this.selectedContent = item;
    };
    CreativeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return Observable_1.Observable.of(_this.currentId = params['id'] || _this.currentId); })
            .subscribe(function () {
            _this.content.getData(null).subscribe(function (res) {
                _this.contentArray = res["songs"].concat(res["stories"]).concat(res["shorts"]).map(function (s) {
                    return { id: s.id, name: s.name, words: s.words.replace(/\n/g, "<br />"), intro: s.intro, type: s.type };
                });
            }, null, function () { return _this.setContent(_this.currentId); });
        });
    };
    return CreativeComponent;
}());
CreativeComponent = __decorate([
    core_1.Component({
        selector: 'creative',
        providers: [index_1.Content],
        template: "\n  <section class=\"page creative\">\n    <aside>\n      <div class=\"hidden-xs\">\n        <div>\u05E9\u05D9\u05E8\u05D9\u05DD</div>\n        <ul class=\"content-list\">\n          <li *ngFor=\"let song of songs()\" (click)=\"onSelect(song)\" [class.selected]=\"song.id===selectedContent.id\">\n            <a>{{song.name}}</a>\n          </li>\n        </ul>\n        <div>\u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD</div>\n        <ul class=\"content-list\">\n          <li *ngFor=\"let story of stories()\" (click)=\"onSelect(story)\" [class.selected]=\"story.id===selectedContent.id\">\n            <a>{{story.name}}</a>\n          </li>\n        </ul>\n        <div>\u05E7\u05D8\u05E2\u05D9\u05DD</div>\n        <ul class=\"content-list\">\n          <li *ngFor=\"let short of shorts()\" (click)=\"onSelect(short)\" [class.selected]=\"short.id===selectedContent.id\">\n            <a>{{short.name}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"visible-xs\">\n        <select [(ngModel)]=\"currentId\" name=\"contentSelect\">\n          <option *ngFor=\"let song of songs()\" (click)=\"onSelect(song)\" [class.selected]=\"song.id===currentId\" [value]=\"song.id\">\n            {{song.name}}\n          </option>\n          <option *ngFor=\"let story of stories()\" (click)=\"onSelect(story)\" [class.selected]=\"story.id===currentId\" [value]=\"story.id\">\n            {{story.name}}\n          </option>\n        </select>\n      </div>\n    </aside>\n    <div *ngIf='currentId!==\"\"'>\n      <div class=\"song-intro\">{{selectedContent.intro}}</div>\n      <div [ngClass]=\"{'song-title': true, 'center': selectedContent.type=='song'}\">{{selectedContent.name}}</div>\n      <div [ngClass]=\"{'song-words': true, 'center': selectedContent.type=='song'}\" [innerHTML]=\"selectedContent.words\"></div>\n      <br />\n      <div class=\"content-end\">*************************</div>\n    </div>\n  </section>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, index_1.Content])
], CreativeComponent);
exports.CreativeComponent = CreativeComponent;
//# sourceMappingURL=creative.component.js.map