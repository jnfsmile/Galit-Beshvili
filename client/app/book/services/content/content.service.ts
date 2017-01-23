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
     /*return this.http.get('/assets/data.json')
      .map(res => res.json());*/
      let data = {
        about: `<p><span class='about-highlight'>שלום לך!</span>
  </p><p>
  <span class="about-highlight">שמי גלית פרידמן, מכוונת נשים לפוריות. עכשיו שבאת, אוכל לספר לך מה הביא אותי לכאן.</span>
  </p><p>
  כבר לפני כמה שנים, לאחר הלידה הראשונה, הבנתי שהשליחות שלי היא להיות כתובת עבור כל אישה העומדת מול אתגרי הפוריות, במטרה לעזור לה למצוא את הדרך שלה להתמודד עם ההמתנה הזו בשמחה, ברוגע ובשלמות עם עצמה. יש לי שיטה ייחודית לעזור לך להחזיר לעצמך את שמחת החיים, את הביטחון שלך בעצמך ובגופך ואת החופש לחיות חיים נורמאליים למרות אתגרי הפוריות שנכפו עליך.
  </p><p>
  <span class="about-highlight">את המקום הזה אני מכירה מקרוב. </span> הראשונה שעברתי איתה תהליך משמעותי היא אני בעצמי ☺. זמן קצר לאחר שנישאתי לאיש שלי נכנסתי לעולם הפוריות המאתגר. בדרך שעברתי למדתי להגיע לשביל הנכון לי, לחיות גם כשטרם נוצרו חיים בתוכי ולהיות שמחה ובטוחה במה שאני בלי קשר לתוצאות הבטא. הדרך הזו הניבה לי עד היום שלוש פירות בטן מתוקים שאני גאה להיות אמא שלהם, ושל אלה, בע"ה, שיבואו אחריהם.
  </p><p>
  <span class="about-highlight">את ניסיוני היקר</span> אני משלבת עם כיוון (אימון יהודי) שלמדתי במכללת "כוונה", שם קיבלתי כלים מעשיים המשלבים את עולם האימון עם עולם המקורות היהודיים שלנו והופכים את הדרך ליצירת שינוי בכל רובדי החיים לפשוטה, בהירה ומעשית. למדתי הנחיית קבוצות ובנוסף אני מרצה כבר מגיל 7 (את הסטאז' עשיתי על הבובות שלי) והיום, אל דאגה, אני מדברת בפני קהל נשים. לא אשמיט את העובדה שאני בעלת תואר ראשון בחינוך והוראת אנגלית, ידיעת האנגלית משמשת אותי בחיים והחינוך עוזר לי, בעיקר, לחנך את עצמי!
  </p><p>
  <span class="about-highlight">מכוונת? </span> הרבה שואלים מה זה וגם האם זה סתם נשמע טוב או שיש מאחורי זה משמעות מיוחדת? אז כן! כמכוונת אני מכוונת אותך להיות קשובה לעצמך להיפגש עם עצמך, עם הכוחות והעצות שכבר טמונים בך. מה שאת הכי צריכה זה לא עצות, או מטרות נוספות או שיגידו לך מה לעשות. אלא מישהי שתכוון אותך, בקצב שלך, להגיע ליעד שלך בצורה הכי טובה לך. חשוב לי להיות קשובה למילים שלך וגם... לשתיקות. הכלים שעומדים לרשותי מאפשרים לי לתת לך את המענה המדויק לך.
  </p><p>
  <span class="about-highlight">אני מודה</span> על הכישרון המבורך שקיבלתי להגיע לעומקם של דברים, לא להסתפק באקמול, פתרון מהיר ושטחי, אלא לאחוז בשורש הדבר ומשם לצמוח ולהצמיח באמת. יש לי סיפוק גדול לראות אישה צומחת ומתעצמת לנוכח הקושי, איך היא הופכת את חייה לפוריים וכהמשך לכל זה, גם חובקת חיים חדשים. אני יודעת היטב עד כמה זה משמעותי שיהיה איפה לפרוק ולכאוב כשצריך ללא שיפוטיות ולשמוח גם מהדברים הכי קטנים. לכן בתהליך אני משקיעה ביצירת מרחב כף זכות, הקשבה, עין טובה והמון רגישות ואמפתיה.
  </p><p>
  <span class="about-highlight">העבודה איתי</span> נעשית בתהליך אישי או בסדנא קבוצתית בהנחייתי. אבל, בעיני, שניהם יחד זה השילוב המנצח! מי כמוך יודעת, כשמחכים להריון שלא מגיע בקלות, חווים קושי ובלבול גדול. בתהליך אנחנו עושות סדר במחשבות, ברגשות וברצונות, נוגעות בנקודות החזקות והאיכותיות שבך על מנת שתהיה לנו קרקע פורייה לצמוח ממנה ורק אז מתחילות להקשיב בעדינות למה שקורה בתוכך ומטלטל את חייך. אחר כך ליצור אצלך איזון פשוט בין הגוף לנפש ולהפוך את השינויים הפנימיים לתוצאות במציאות היומיומית שלך. מכאן ואילך השמיים הם הגבול, החיים סוף סוף זורמים, רגועים ופוריים.
  </p><p>
  <span class="about-highlight">אני מאמינה</span> שגוף ונפש משפיעים זה על זה בצורה מאוד חזקה, במיוחד בפוריות. השינוי שמתחולל בנפש משפיע ישירות על הגוף. עלינו להאמין שיש לנו את הכוח והיכולת לבחור ברגשות ומחשבות הרצויים לנו לנוכח כל קושי. התמדה, סבלנות והוקרת כל צעד קטן יעזרו לנו להפוך את חיינו לזורמים ופוריים כפי שאנחנו רוצות. הסיכויים של אישה שחיה חיים פוריים ושמחים להביא חיים לעולם גבוהים בהרבה! ובכלל, אני מאמינה שכל אתגר שנשלח אלינו, לא הגיע בטעות אלא יש לו תפקיד לעזור לנו להתקדם ולפתח את המידות שלנו. גם באתגר הזה יש הזדמנות לצמיחה וללמידה חדשה אם רק מתבוננים על המקום הזה ומוכנים לצאת למסע אישי. ואז הרווח כפול – נפש פורייה וגוף פורה!
  </p><p>
  <span class="about-highlight">אז שתהיה לנו דרך צלחה! </span>
  </p><p>
  <span class="about-highlight">שלך באהבה, גלית. </span>
  </p><p>
  אם עדיין לא קיבלת את החוברת <a href="">"בדרך לחיים חדשים"</a> לחצי וקבלי אותה חינם!
  </p><p>
  אני מזמינה אותך לשיחת ייעוץ חינם בה נתאים לך את התהליך שלך בקצב הנכון לך.
  </p><p>
  כבר שמעת על הספר החדש שלי "החיים שבתוכך"? בעזרתו תצליחי לגלות את הדרך שלך להתמודד מול אתגרי הפוריות בשמחה, ברוגע ובשלמות עם עצמך. תוכלי להזמין אותו בפורמט דיגיטלי או מודפס.
  </p><p>
  אם עדיין לא שמעת את ההרצאה שלי "שבעת השלבים לצאת מנצחת מכל קושי" אשמח להגיע ולהעביר אותה לכלל הנשים באזור מגורייך.
  </p>`,
  aboutBook: `<p>
	<span class="about-highlight">כל המתנה וציפייה למשהו</span>	שטרם קורה
	<br />
	טומנת בתוכה גם תחושת אכזבה והחמצה 'למה זה עדיין לא קרה'
	<br />
	העיכוב הזה, ארוך אשר יהיה, יוצר מעגל של
	<br />
	<span class="about-highlight">רצון למימוש – ציפייה – אכזבה – תסכול – חיפוש אחר נקודת אור חדשה</span>	<br />
	תוך כדי המעגל הזה את מנסה לפעול עם הגוף, לטפל בו, כדי להגיע כבר אל ההריון המיוחל
</p><p>
<span class="about-highlight">ומה עם הנפש? הקול הפנימי שבתוכך?</span>
</p><p>
הספר "החיים שבתוכך"
<br />
נכתב מתוך
<span class="about-highlight">לב פועם ומרגיש</span>,
<br />
מתוך
<span class="about-highlight">לימוד, ניסיון חיים וליווי אישי</span>נשים שמחכות...
<br />
ומתוך שליחות גדולה להרבות שמחה, אהבה וחיות בעולם.
<br />
הספר מספר לנו
<br />
ש
<span class="about-highlight">הנפש פועלת יחד עם הגוף</span>ויחד עם זאת, גם היא רוצה לבטא את עצמה.
</p><p>
<span class="about-highlight">הנפש</span>חווה את המעגל הזה.
<br />
גם לה קשה שם וגם היא רוצה כבר להתחיל לחוות מעגל שונה, של חיים פריחה ושמחה.
<br />
והיא מוכנה לגלות איך עושים את זה.
<br />
והיא מכונסת ומכווצת בתוך עצמה.
</p><p>
העניין הוא ש
<span class="about-highlight">לנפש שפה משל עצמה</span>.
<br />
וצריך להכיר את השפה הזאת.
<br />
<span class="about-highlight">מה היא מספרת? מה היא מרגישה? מה היא מבקשת? מה פותח אותה לטוב?</span>
</p><p>
<span class="about-highlight">נקודת החיפוש אחר נקודת אור חדשה היא הזדמנות טובה להכיר את השפה של הנפש.</span>
<br />
<span class="about-highlight">להכיר את הנפש שלך מתוך</span>
<br />
הקשבה פנימית,
<br />
מחשבות,
<br />
רגשות,
<br />
הקולות המתרוצצים בתוכך.
</p><p>
<span class="about-highlight">הקשבה מודעת לנפש מאפשרת לך</span>
<br />
בהירות
<br />
צמיחה והתכווננות מחודשת
<br />
שחרור ממעגל התסכול
<br />
וכניסה למעגל השמחה
<br />
<span class="about-highlight">בדרכך להבאת חיים חדשים לעולם.</span>
</p><p>
<span class="about-highlight">למי הספר מיועד?</span>
<br />
הספר מיועד לכל אישה שממתינה לפרי בטנה ובעצם לכל אישה ממתינה שמשהו טוב יקרה בחייה
<br />
ורוצה להיכנס למעגל של חיות שמחה וטוב.
<br />
הספר
<span class="about-highlight">מכוון פנימה ומאפשר</span>לך
<br />
<span class="about-highlight">לשמוע</span>את עצמך מבפנים
<br />
<span class="about-highlight">לראות</span>את מציאות חייך באור אחר
<br />
<span class="about-highlight">לתת</span>לתחומים נוספים בחייך לזרום ולפרוח
<br />
<span class="about-highlight">קבל</span>כוחות ועוצמות לכל אתגר בדרך בתחום הפוריות ובכלל
<br />
<span class="about-highlight">ליישם כלים חשובים להתמודדות נכונה מול החברה, המשפחה, בן זוגך ועצמך.</span>
</p>
<p>
בקרוב יהיה אפשר לרכוש את הספר בחנויות או בקנייה אונליין.
</p>
<p>
את התהליך שבספר תוכלי לעשות באופן אישי ומדויק לך בפגישות איתי בשילוב סדנא קבוצתית.
</p>
<p>
להבין טוב יותר איך הולך תהליך אישי איתי לחצי כאן
</p>
<p>
להבין טוב יותר מה קורה בסדנא קבוצתית לחצי כאן
</p>
<p>
<span class="about-highlight">שלך באהבה,</span>
<br />
גלית.
</p>`
      };
    return Observable.of(key ? data[key] : data);
  }

}