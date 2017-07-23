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
var BlogEditComponent = (function () {
    function BlogEditComponent(route, router, content, tagService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.content = content;
        this.tagService = tagService;
        this.blogContent = "";
        this.body = "";
        this.title = "";
        this.author = "";
        this.authorEmail = "";
        this.lastChange = new Date().toISOString();
        this.taglist = [];
        this.taglistFlat = [];
        this.editorOptions = {
            placeholderText: "תוכן בלוג",
            events: {
                "froalaEditor.blur": function (e, editor) {
                    _this.bodyUpdate();
                },
                "froalaEditor.keydown": function (e, editor, keydownEvent) {
                    _this.delayUpdate(_this.bodyUpdate.bind(_this));
                }
            }
        };
    }
    BlogEditComponent.prototype.gotoTag = function (tagId) {
        this.router.navigate(['/tag', { id: tagId }]);
        return false;
    };
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return Observable_1.Observable.of(params['id']); })
            .subscribe(function (id) {
            if (!id) {
                _this.post = new blog_post_1.BlogPost();
            }
            else {
                _this.content.getData(id).subscribe(function (all) {
                    if (!all) {
                        _this.post = new blog_post_1.BlogPost();
                        return;
                    }
                    var blog = new blog_post_1.BlogPost(all);
                    _this.post = blog;
                    _this.body = _this.htmlDecode(blog.body);
                    _this.title = blog.title;
                    _this.author = blog.author;
                    _this.authorEmail = blog.authorEmail;
                    _this.lastChange = new Date(Date.parse(blog.lastChange)).toISOString();
                    _this.tagService.getData(blog.tags).subscribe(function (res) {
                        _this.taglist = res;
                        _this.taglistFlat = _this.taglist.map(function (t) { return { display: t.name, value: t.id }; });
                    });
                });
            }
        });
    };
    BlogEditComponent.prototype.verifyId = function () {
        var _this = this;
        if (!this.post || !this.post.id) {
            if (this.post.title !== "" && this.post.body !== "") {
                this.content.save(this.post)
                    .subscribe(function (res) { return _this.post.id = res.id; });
            }
            return false;
        }
        return true;
    };
    BlogEditComponent.prototype.titleUpdate = function (newTitle) {
        this.post.title = newTitle;
        if (this.verifyId()) {
            this.content.update(this.post).subscribe();
        }
    };
    BlogEditComponent.prototype.bodyUpdate = function () {
        this.post.body = this.htmlEncode(this.body);
        //console.log(newBody.substr(150));
        if (this.currentWait) {
            clearTimeout(this.currentWait);
            this.currentWait = 0;
        }
        if (this.verifyId()) {
            this.content.update(this.post).subscribe();
        }
    };
    BlogEditComponent.prototype.lastChangeUpdate = function () {
        this.post.lastChange = this.lastChange;
        if (this.verifyId()) {
            this.content.update(this.post).subscribe();
        }
    };
    BlogEditComponent.prototype.delayUpdate = function (func) {
        if (this.currentWait) {
            clearTimeout(this.currentWait);
            this.currentWait = 0;
        }
        this.currentWait = setTimeout(func, 5000);
    };
    BlogEditComponent.prototype.htmlEncode = function (mdStr) {
        var htmlStr = "<p>" + mdStr + "</p>";
        htmlStr = htmlStr
            .replace(/\n\n/gi, "</p><p>")
            .replace(/\n/gi, "<br />");
        return htmlStr;
    };
    BlogEditComponent.prototype.htmlDecode = function (htmlStr) {
        var mdStr = htmlStr
            .replace(/<br \/>/gi, "\n")
            .replace(/<\/p>/gi, "\n\n")
            .replace(/<p>/gi, "");
        return mdStr;
    };
    BlogEditComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    return BlogEditComponent;
}());
BlogEditComponent = __decorate([
    core_1.Component({
        selector: 'blogedit',
        providers: [/*Content,*/ index_2.TagService],
        template: "\n      <section class=\"page blog\">\n        <article>\n          <header>\n            <h3>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 - \u05D4\u05D1\u05DC\u05D5\u05D2</h3>\n            <editable [text]=\"title\" (textChange)=\"titleUpdate($event)\">{{title}}</editable>\n            <div>\n              <a [href]=\"'mailto:'+authorEmail\">{{author}}</a>,\n              <input type=\"date\" [value]=\"lastChange | date:'yyyy-MM-dd'\" (input)=\"lastChange=parseDate($event.target.value)\" />\n            </div>\n            <time pubdate [attr.datetime]=\"lastChange\">{{lastChange | hebdate}}</time>\n            <div [froalaEditor]=\"editorOptions\" [(froalaModel)]=\"body\"></div>\n          </header>\n          <section>\n            <span>\u05EA\u05D2\u05D9\u05D5\u05EA:</span>\n            <tag-input [(ngModel)]='taglistFlat'></tag-input>\n            <ul>\n              <li *ngFor=\"let tag of taglist\">\n                <a (click)=\"gotoTag(tag.id)\" [href]=\"'/tag/'+tag.id\">{{tag.name}}</a>\n              </li>\n            </ul>\n          </section>\n        </article>\n      </section>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, index_1.Content, index_2.TagService])
], BlogEditComponent);
exports.BlogEditComponent = BlogEditComponent;
//# sourceMappingURL=blogEdit.component.js.map