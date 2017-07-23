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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var Content = (function () {
    function Content(http, webApiBaseUrl) {
        this.http = http;
        this.webApiBaseUrl = webApiBaseUrl;
        this.value = 'בשבילי';
        this.data = [];
    }
    Content.prototype.getByTag = function (id) {
        return Observable_1.Observable.of(this.data.filter(function (item) { return item.tags.indexOf(id) >= 0; }));
    };
    Content.prototype.save = function (post) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.webApiBaseUrl + ("/sapi/v1/blog/" + post.id), JSON.stringify(post), options)
            .map(function (item) { return item.json(); });
    };
    Content.prototype.update = function (post) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.webApiBaseUrl + ("/sapi/v1/blog/" + post.id), JSON.stringify(post), options)
            .map(function (item) { return item.json(); });
    };
    Content.prototype.getLastId = function () {
        return this.http.get(this.webApiBaseUrl + "/api/v1/blogs").map(function (item) { return item.json(); });
    };
    Content.prototype.getData = function (id) {
        return this.http.get(this.webApiBaseUrl + ("/api/v1/blog/" + id)).map(function (item) { return item.json(); });
        /*
          this.data.push( ...[
          new BlogPost(
            {
              id: "0",
              title: "איך תדעי אם רופא הפוריות שלך טוב לך או לא?",
              author: "גלית פרידמן",
              authorEmail: "galit@be-shvili.co.il",
              lastChange: "2017-03-21",
              tags: [0, 8],
              body: `<p>
    ניסיון רב שנים, שם טוב, או מרפאה נחשבת
    <br />
    עדיין לא תמיד מספיקים.
    <br />
    את יכולה להיות אצל רופא פרטי בעל שם ועדיין להרגיש שמשהו חסר לך שם
    <br />
    ואת יכולה להיות אצל רופא פוריות לא מוכר ולא פרטי ולהרגיש שהוא השליח שלך.
    </p>
    
    <p>
    המדד העיקרי לרופא פוריות הטוב ביותר עבורך הוא:
    <br />
    את.
    <br />
    האם יש לך וודאות שאת נמצאת בידיים טובות?
    <br />
    האם כשאת מקבלת מרשם או פרוטוקול או שינוי במינונים
    <br />
    האם את בטוחה שזה הנכון בשבילך עכשיו?
    </p>
    
    <p>
    זה המדד האמיתי.
    </p>
    
    <p>
    לא יעזור כמה הצלחות היו לו עם מטופלות אחרות
    <br />
    הדבר החשוב הוא כמה את מרגישה שאת ההצלחה הבאה.
    <br />
    כדי לבדוק את המדד את הזה
    <br />
    עליך לשאול את עצמך כמה שאלות פשוטות:
    <br />
    <ol>
    <li>האם טוב לי כשאני מגיעה לתור אצל הרופא שלי?
    </li>
    <li>עד כמה אני מרגישה שיש לי גב רפואי חזק ממנו?
    </li>
    <li>באיזו מידה אני סומכת על שיקול הדעת הרפואי שלו?
    </li>
    </ol>
    אם מציקות לך מחשבות טורדניות על לעבור לרופא אחר :
    <br />
    <ol>
    <li>קודם כל, תדעי שאלו מחשבות נורמאליות גם אם הרופא שלך הוא הטוב ביותר עבורך
    </li>
    <li>תשאלי את עצמך מה מפריע לך אצלו?
    </li>
    <li>תזהי עד כמה הוא מרים את רוחך ועד כמה הוא מוריד אותה.
    </li>
    <li>נסי לחשוב על אלטרנטיבה מציאותית ונסי להרגיש עד כמה נוח לך איתה.
    </li>
    </ol>
    </p>
    
    <p>
    ויש משהו נוסף, והוא בעצם לב העניין, שלא הזכרנו עד עכשיו.
    <br />
    בכל המסע אל ההריון והלידה, הרופא תופס מקום משמעותי.
    <br />
    ולך יש את האפשרות ליצור בתוכך את התחושה הבטוחה לה את זקוקה מאד.
    <br />
    גם אם הרופא מזכיר לך את כל הסטטיסטיקות המפחידות, מרים ידיים מראש,
    <br />
    לא נותן הרבה סיכויים או נכנס לטיפול אנחה כבדה של: "טוב, בואי ננסה ונראה מה יהיה"
    <br />
    כאילו חודש-חודשיים אצלך זה שום דבר...
    </p>
    
    <p>
    על יצירת הביטחון שלך עם עצמך אנחנו עובדים המון בסדנה הקבוצתית, גם בתהליך האישי
    <br />
    וגם בספר "החיים שבתוכך" אני מדברת על זה לא מעט.
    <br />
    זו אפשרות שניתנת לך אישית עם קוד הסודי שלך לעצמך.
    <br />
    הבעיה היא שלפעמים מרוב שזה קוד סודי גם את לא תמיד יודעת אותו וצריכה להתחיל ללמוד מהו..
    <br />
    ודרכו להבין מה מחזק אותך מבפנים ומה יכול לתת לך תחושה,
    <br />
    ואולי כמעט ידיעה, ושהחיים שלך, וגם החיים שבתוכך, זה לא הפקרות.
    <br />
    שמה שקורה (או לא קורה) אתך הוא מכוון ומדויק לך. ולכל הבלאגן הזה
    <br />
    יש כיוון שהולך להגיע למקום מסוים ואפילו טוב.
    </p>
    
    <p>
    ולכן, גם כשרופא פוריות אמר לי (אינספור פעמים..) לא מתקדם אצלך כלום,
    <br />
    אין תזוזה, הגוף לא מגיב ועוד כל מיני 'מחמאות' כאלה,
    <br />
    בהתחלה האמירות האלה היו מגיעות למקום מאד אישי, רגיש ופגיע.
    <br />
    אבל עם הזמן, כשגיליתי את האפשרות ליצירות הביטחון שלי בתוכי
    <br />
    האמירות (גם אם נכונות/רפואיות/טכניות) רק עברו לידי.
    </p>
    
    <p>
    זכרי, הסיכויים להצלחת טיפול עולים באופן משמעותי עם
    <br />
    תחושת הביטחון ברופא (ובעצם בכל מי שמעורב)
    <br />
    שהוא השליח הנכון לך ועליו את סומכת.
    </p>
    
    <p>
    אז אם מצד אחד את לא מעבירה טיפול שלם בחששות ודאגות כמו:
    <br />
    "מי אמר שככה נכון לעשות? מי אמר שהוא שולח אותי לטיפול הנכון לי?!"
    <br />
    ומצד שני,
    <br />
    את מצליחה להרגיש בתוכך אם הטיפול הזה נכון לך או לא
    <br />
    ואת מסוגלת לזהות ולהרגיש מה נכון לך ולגוף שלך
    <br />
    את בכיוון הנכון!
    </p>
    
    <p>
    שנצליח לקבל תשובות גם מבפנים,
    <br />
    שלכן באהבה,
    <br />
    גלית.
    </p>`
          })
              ]);
    
        return this.data;*/
    };
    return Content;
}());
Content = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject('BASE_API_URL')),
    __metadata("design:paramtypes", [http_1.Http, String])
], Content);
exports.Content = Content;
//# sourceMappingURL=content.service.js.map