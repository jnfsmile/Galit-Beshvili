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
var blog_post_1 = require("./blog.post");
var index_1 = require("./services/content/index");
var index_2 = require("../tags/services/content/index");
var BlogComponent = (function () {
    function BlogComponent(route, router, content, tagService) {
        this.route = route;
        this.router = router;
        this.content = content;
        this.tagService = tagService;
        this.blogContent = "";
        this.body = "";
        this.title = "";
        this.author = "";
        this.authorEmail = "";
        this.lastChange = "";
        this.taglist = [];
    }
    BlogComponent.prototype.gotoTag = function (tagId) {
        this.router.navigate(['/tag', { id: tagId }]);
        return false;
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return Observable_1.Observable.of(params['id']); })
            .subscribe(function (id) {
            _this.content.getData(id).subscribe(function (all) {
                if (!all)
                    return;
                var blog = new blog_post_1.BlogPost(all);
                _this.body = blog.body;
                _this.title = blog.title;
                _this.author = blog.author;
                _this.authorEmail = blog.authorEmail;
                _this.lastChange = new Date(blog.lastChange).toISOString();
                _this.tagService.getData(blog.tags).subscribe(function (res) { _this.taglist = res; });
            });
        });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        selector: 'blog',
        providers: [/*BlogContentService,*/ index_2.TagService],
        template: "\n      <section class=\"page blog\">\n        <article>\n          <header>\n            <h3>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 - \u05D4\u05D1\u05DC\u05D5\u05D2</h3>\n            <h4>{{title}}</h4>\n            <div>\n              <a [href]=\"'mailto:'+authorEmail\">{{author}}</a>,\n              <time pubdate [attr.datetime]=\"lastChange\">{{lastChange | hebdate}}</time>\n            </div>\n          </header>\n          <div [innerHTML]=\"body\"></div>\n          <section>\n            <span>\u05EA\u05D2\u05D9\u05D5\u05EA:</span>\n            <ul>\n              <li *ngFor=\"let tag of taglist\">\n                <a (click)=\"gotoTag(tag.id)\" [href]=\"'/tag/'+tag.id\">{{tag.name}}</a>\n              </li>\n            </ul>\n          </section>\n        </article>\n      </section>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, index_1.Content, index_2.TagService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map