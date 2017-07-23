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
var EditableComponent = (function () {
    function EditableComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.textChange = new core_1.EventEmitter();
    }
    EditableComponent.prototype.ngOnInit = function () {
    };
    EditableComponent.prototype.delayChange = function (newText) {
        if (this.currentWait) {
            clearTimeout(this.currentWait);
            this.currentWait = 0;
        }
        this.currentWait = setTimeout(this.onChange.bind(this, newText), 5000);
    };
    EditableComponent.prototype.onChange = function (newText) {
        this.text = newText;
        this.textChange.emit(this.text);
    };
    EditableComponent.prototype.onKey = function (e) {
        if (e.which == 13) {
            var docFragment = document.createDocumentFragment();
            //add a new line
            var newEle = document.createTextNode('\n');
            docFragment.appendChild(newEle);
            //make the br replace selection
            var range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            range.insertNode(docFragment);
            //create a new range
            range = document.createRange();
            range.setStartAfter(newEle);
            range.collapse(true);
            //make the cursor there
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            //document.execCommand('insertHTML', false, '<br><br>');
            return false;
        }
        return true;
    };
    return EditableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditableComponent.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditableComponent.prototype, "textChange", void 0);
EditableComponent = __decorate([
    core_1.Component({
        selector: 'editable',
        styles: ["\n  "],
        template: "\n  <div contenteditable=\"true\" [class.empty]=\"!text || text.length == 0\" [textContent]=\"text\"\n    (input)=\"delayChange($event.target.textContent)\" (blur)=\"onChange($event.target.textContent)\"\n      (keydown)=\"onKey($event)\"></div>\n  "
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], EditableComponent);
exports.EditableComponent = EditableComponent;
//# sourceMappingURL=editable.component.js.map