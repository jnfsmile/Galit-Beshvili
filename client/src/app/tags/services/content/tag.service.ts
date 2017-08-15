import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import { SubjectTag } from "../../index";

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TagService {

  data = [];

  constructor(private http: Http, @Inject('BASE_API_URL') private webApiBaseUrl:string) {

  }

  loadData(force=false){
    /*if (!force && this.data.length > 0) {
      return;
    }*/

    this.data = this.http.get(this.webApiBaseUrl + `/api/v1/tags`).map(item => item.json());

  }

  getData(fromList = []): Observable<SubjectTag[]> {
    return this.http.get(this.webApiBaseUrl + `/api/v1/tags`)
      .map(item => item.json().filter(t => (fromList.length === 0) || fromList.indexOf(t) >= 0) );
    this.loadData();
    if (fromList && fromList.length !== 0) {
      return this.data.filter( item => fromList.indexOf(item.id) >= 0);
    }
    console.log(this.data);
    this.data.subscribe((tags:SubjectTag[]) => console.log(tags));
    return this.data;
  }

}
