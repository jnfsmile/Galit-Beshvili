import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TagService {

  data = [];

  constructor(public http: Http) {

  }

  loadData(force=false){
    if (!force && this.data.length > 0) {
      return;
    }
    this.data = [
    {id: 0, name: "פוריות"},
    {id: 1, name: "זוגיות"},
    {id: 2, name: "בטחון עצמי"},
    {id: 3, name: "הוויה"},
    {id: 4, name: "מחשבות"},
    {id: 5, name: "רגשות"},
    {id: 6, name: "דימוי גוף"},
    {id: 7, name: "יחסים במשפחה ובחברה"},
    {id: 8, name: "רפואה"},
    {id: 9, name: "הלכה"},
    {id: 10, name: "גוף-נפש"},
    {id: 11, name: "עשייה פורייה"},
    {id: 12, name: "שמחה והודיה"}
    ];
  }

  getData(list) {
    this.loadData();
    console.log(list);
    if (list && list.length === 0)
      return Observable.of( this.data );
    return Observable.of( this.data.filter( item => list.indexOf(item.id) >= 0) );
  }

}
