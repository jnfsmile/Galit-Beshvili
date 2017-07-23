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
        media: `<p><a href="http://www.inn.co.il/News/News.aspx/341421">ראיון לרגל יציאתו של "החיים שבתוכך" - ערוץ 7</a></p>
        <p><a href="http://www.hidabroot.org/article/218318">ראיון לרגל יציאתו של "החיים שבתוכך" - אתר הידברות</a></p>
        <p><a href="http://www.israelnationalnews.com/News/News.aspx/226091">(אנגלית) ראיון לרגל יציאתו של "החיים שבתוכך" - ערוץ 7</a></p>
        `
      };
    return Observable.of(key ? data[key] : data);
  }

}
