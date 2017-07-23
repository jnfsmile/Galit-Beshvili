"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlogPost = (function () {
    function BlogPost(item) {
        if (item === void 0) { item = { _id: null, lastChange: "", title: "", author: "גלית פרידמן", authorEmail: "galit@be-shvili.co.il", tags: [], body: "" }; }
        var _id = item._id, lastChange = item.lastChange, title = item.title, author = item.author, authorEmail = item.authorEmail, tags = item.tags, body = item.body;
        this.id = _id;
        this.lastChange = lastChange;
        this.title = title;
        this.author = author;
        this.authorEmail = authorEmail;
        this.body = body;
        this.tags = tags;
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
//# sourceMappingURL=blog.post.js.map