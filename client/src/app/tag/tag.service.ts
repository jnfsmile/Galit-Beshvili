import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

import { Tag } from "./tag";

@Injectable()
export class TagService {

  constructor(private http: Http) {  }

  getData(): Observable<Tag[]> {
    let webApiBaseUrl = environment.apiUrl;
    return this.http.get(webApiBaseUrl + `/api/v1/tags`)
      .map(item => {
        return item.json().map( t => new Tag(t));
      });
  }

}
