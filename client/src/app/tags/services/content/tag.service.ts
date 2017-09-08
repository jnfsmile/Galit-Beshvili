import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import { SubjectTag } from "../../index";

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TagService {

  constructor(private http: Http, @Inject('BASE_API_URL') private webApiBaseUrl:string) {  }

  getData(): Observable<SubjectTag[]> {
    return this.http.get(this.webApiBaseUrl + `/api/v1/tags`)
      .map(item => item.json());
  }

}
