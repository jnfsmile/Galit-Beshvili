"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./home/index");
var index_2 = require("./contact/index");
var index_3 = require("./about/index");
var index_4 = require("./media/index");
var index_5 = require("./book/index");
var index_6 = require("./blog/index");
var index_7 = require("./blog/index");
var index_8 = require("./tags/index");
var index_9 = require("./workshop/index");
var index_10 = require("./personal/index");
var index_11 = require("./creative/index");
var index_12 = require("./notYet/index");
var index_13 = require("./editable/index");
var index_14 = require("./thumbnail/index");
var index_15 = require("./gallery/index");
var index_16 = require("./gallery/index");
var index_17 = require("./youtube/index");
var angular2_froala_wysiwyg_1 = require("angular2-froala-wysiwyg");
var ng2_tag_input_1 = require("ng2-tag-input");
var animations_1 = require("@angular/platform-browser/animations");
var heb_date_pipe_1 = require("./pipes/heb-date.pipe");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            angular2_froala_wysiwyg_1.FroalaEditorModule.forRoot(), angular2_froala_wysiwyg_1.FroalaViewModule.forRoot(),
            ng2_tag_input_1.TagInputModule, animations_1.BrowserAnimationsModule
        ],
        declarations: [app_component_1.AppComponent, index_1.HomeComponent, index_2.ContactComponent, index_3.AboutComponent, index_5.BookComponent, index_6.BlogComponent, index_7.BlogEditComponent, index_8.TagComponent, index_4.MediaComponent,
            index_10.PersonalComponent, index_9.WorkshopComponent, index_11.CreativeComponent, index_12.NotYetComponent, index_13.EditableComponent, index_14.ThumbnailComponent, index_15.GalleryComponent, index_16.GalleryImageComponent, index_17.YoutubeComponent,
            heb_date_pipe_1.HebDatePipe],
        providers: [
            { provide: 'BASE_API_URL', useValue: "http://localhost:3300" }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map