import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Content {
  value = 'בשבילי';
  constructor(public http: Http) {

  }

  getData(key) {
      let data = {
  aboutBook: `
  <p>
  <a href="http://bit.ly/2jUvvLF">אפשר כבר להזמין במכירה המוקדמת - לחצי כאן</a>
  </p>
  <p>
	<span class="book-highlight start">כל המתנה וציפייה למשהו</span>	שטרם קורה
	<br />
	טומנת בתוכה גם תחושת אכזבה והחמצה 'למה זה עדיין לא קרה'
	<br />
	העיכוב הזה, ארוך אשר יהיה, יוצר מעגל של
	<br />
	<span class="book-highlight">רצון למימוש – ציפייה – אכזבה – תסכול – חיפוש אחר נקודת אור חדשה</span>
  <br />
	תוך כדי המעגל הזה את מנסה לפעול עם הגוף, לטפל בו, כדי להגיע כבר אל ההריון המיוחל
</p><p>
<span class="book-highlight start">ומה עם הנפש? הקול הפנימי שבתוכך?</span>
</p><p>
הספר "החיים שבתוכך"
<br />
נכתב מתוך <span class="book-highlight">לב פועם ומרגיש</span>,
<br />
מתוך <span class="book-highlight">לימוד, ניסיון חיים וליווי אישי</span> נשים שמחכות...
<br />
ומתוך שליחות גדולה להרבות שמחה, אהבה וחיות בעולם.
<br />
הספר מספר לנו
<br />
ש<span class="book-highlight">הנפש פועלת יחד עם הגוף</span> ויחד עם זאת, גם היא רוצה לבטא את עצמה.
</p><p>
<span class="book-highlight start">הנפש</span> חווה את המעגל הזה.
<br />
גם לה קשה שם וגם היא רוצה כבר להתחיל לחוות מעגל שונה, של חיים פריחה ושמחה.
<br />
והיא מוכנה לגלות איך עושים את זה.
<br />
והיא מכונסת ומכווצת בתוך עצמה.
</p><p>
העניין הוא ש<span class="book-highlight">לנפש שפה משל עצמה</span>.
<br />
וצריך להכיר את השפה הזאת.
<br />
<span class="book-highlight">מה היא מספרת? מה היא מרגישה? מה היא מבקשת? מה פותח אותה לטוב?</span>
</p><p>
<span class="book-highlight start">נקודת החיפוש אחר נקודת אור חדשה היא הזדמנות טובה להכיר את השפה של הנפש.</span>
<br />
<span class="book-highlight">להכיר את הנפש שלך מתוך</span>
<br />
הקשבה פנימית,
<br />
מחשבות,
<br />
רגשות,
<br />
הקולות המתרוצצים בתוכך.
</p><p>
<span class="book-highlight start">הקשבה מודעת לנפש מאפשרת לך</span>
<br />
בהירות
<br />
צמיחה והתכווננות מחודשת
<br />
שחרור ממעגל התסכול
<br />
וכניסה למעגל השמחה
<br />
<span class="book-highlight">בדרכך להבאת חיים חדשים לעולם.</span>
</p><p>
<span class="book-highlight start">למי הספר מיועד?</span>
<br />
הספר מיועד לכל אישה שממתינה לפרי בטנה ובעצם לכל אישה ממתינה שמשהו טוב יקרה בחייה
<br />
ורוצה להיכנס למעגל של חיות שמחה וטוב.
<br />
הספר <span class="book-highlight">מכוון פנימה ומאפשר</span> לך
<br />
<span class="book-highlight">לשמוע</span> את עצמך מבפנים
<br />
<span class="book-highlight">לראות</span> את מציאות חייך באור אחר
<br />
<span class="book-highlight">לתת</span> לתחומים נוספים בחייך לזרום ולפרוח
<br />
<span class="book-highlight">לקבל</span> כוחות ועוצמות לכל אתגר בדרך בתחום הפוריות ובכלל
<br />
<span class="book-highlight">ליישם כלים חשובים להתמודדות נכונה מול החברה, המשפחה, בן זוגך ועצמך.</span>
</p>
<p>
בקרוב יהיה אפשר לרכוש את הספר בחנויות.
<br />
<a href="http://bit.ly/2jUvvLF">אפשר כבר להזמין במכירה המוקדמת - לחצי כאן</a>
<!--<br />
<a href="">קשה לחכות? מתלבטת? רוצה להתרשם? לחצי כאן לפרק חינם מתוך הספר!</a>-->
</p>
<p>
את התהליך שבספר תוכלי לעשות באופן אישי ומדויק לך בפגישות איתי בשילוב סדנא קבוצתית.
</p>
<p>
<a routerLink="/personal" href="/personal">רוצה להבין טוב יותר איך הולך תהליך אישי איתי? לחצי כאן</a>
</p>
<p>
<a routerLink="/workshop" href="/workshop">מתעניינת מה קורה בסדנא קבוצתית? לחצי כאן</a>
</p>
<p>
<span class="book-highlight pink">שלך באהבה,</span>
<br />
גלית.
</p>`
      };
    return Observable.of(key ? data[key] : data);
  }

}
