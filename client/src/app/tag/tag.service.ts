import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

import { Tag as SubjectTag } from "./tag";

@Injectable()
export class TagService {

  constructor(private http: Http) {  }

  getData(/*filterTags: string[]*/): Observable<SubjectTag[]> {
    let webApiBaseUrl = environment.apiUrl;
    return this.http.get(webApiBaseUrl + `/api/v1/tags`)
      .map(item => item.json()/*.filter(t => filterTags.indexOf(t) >= 0).map(t => new SubjectTag(t))*/);
  }

}