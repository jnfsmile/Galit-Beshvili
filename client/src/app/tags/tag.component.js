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
var tag_service_1 = require("./services/content/tag.service");
var index_1 = require("../blog/services/content/index");
var TagComponent = (function () {
    function TagComponent(route, router, blogService, tagService) {
        this.route = route;
        this.router = router;
        this.blogService = blogService;
        this.tagService = tagService;
        this.title = "תגית";
        this.posts = [];
    }
    TagComponent.prototype.navigate = function (id) {
        this.router.navigate(['/blog', { id: id }]);
    };
    TagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return Observable_1.Observable.of(+params['id']); })
            .subscribe(function (id) {
            _this.tagService.getData([id]).subscribe(function (tags) { return _this.title = (tags.length > 0) ? tags[0].name : ""; });
            _this.blogService.getByTag(id).subscribe(function (res) {
                console.log(res);
                if (res.length === 0)
                    return;
                (_a = _this.posts).push.apply(_a, res);
                var _a;
            });
        });
    };
    return TagComponent;
}());
TagComponent = __decorate([
    core_1.Component({
        selector: 'tag',
        providers: [index_1.Content, tag_service_1.TagService],
        template: "\n      <section class=\"page tag postbatch\">\n        <h3>{{title}}</h3>\n        <article *ngFor=\"let post of posts\">\n          <div (click)=\"navigate(post.id)\"><a>{{post.title}}</a></div>\n          <div>{{post.author}}</div>\n        </article>\n      </section>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, index_1.Content, tag_service_1.TagService])
], TagComponent);
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map