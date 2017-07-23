import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {BlogPost} from '../../index';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Content {

  value = 'בשבילי';
  data = [];

  constructor(private http: Http, @Inject('BASE_API_URL') private webApiBaseUrl:string) {

  }

  getByTag(id) {
    return Observable.of(this.data.filter( item => item.tags.indexOf(id) >= 0));
  }

  save(post: BlogPost): Observable<BlogPost> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.webApiBaseUrl + `/sapi/v1/blog/${post.id}`, JSON.stringify(post), options)
    .map(item => item.json());
  }

  update(post: BlogPost): Observable<BlogPost> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.webApiBaseUrl + `/sapi/v1/blog/${post.id}`, JSON.stringify(post), options)
    .map(item => item.json());
  }

  getLastId() : Observable<BlogPost> {
    return this.http.get(this.webApiBaseUrl + `/api/v1/blogs`).map(item => item.json());
  }

  getData(id) : Observable<BlogPost[]>{
    return this.http.get(this.webApiBaseUrl + `/api/v1/blog/${id}`).map(item => item.json());
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
  }
}
