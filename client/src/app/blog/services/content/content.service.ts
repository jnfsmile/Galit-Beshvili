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
    return this.http.get(this.webApiBaseUrl + `/api/v1/blogs`)
      .map(item => item.json().filter( item => item.tags.indexOf(id) >= 0 ) );
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
  }
}
