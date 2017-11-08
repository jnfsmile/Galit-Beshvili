import { Injectable, Inject } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { BlogPost } from './blog-post';

@Injectable()
export class BlogService {

  webApiBaseUrl: string;

  constructor(private http: Http) {
    this.webApiBaseUrl = (environment.production) ? "" : "http://localhost:3300";
  }

  getByTag(id: String) {
    return this.http.get(this.webApiBaseUrl + `/api/v1/blogs`)
      .map(item => item.json().filter( item => item.tags.includes(id)) );
  }

  save(post: BlogPost): Observable<BlogPost> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.webApiBaseUrl + `/sapi/v1/blog`, JSON.stringify(post), options)
    .map(item => new BlogPost(item.json()));
  }

  update(post: BlogPost): Observable<BlogPost> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.webApiBaseUrl + `/sapi/v1/blog/${post.id}`, JSON.stringify(post), options)
    .map(item => item.json());
  }

  getLastId() : Observable<BlogPost> {
    return this.http.get(this.webApiBaseUrl + `/api/v1/blogs`).map(item => new BlogPost(item.json()));
  }

  getAll() : Observable<BlogPost[]>{
    return this.http.get(this.webApiBaseUrl + `/sapi/v1/blogs`).map(item => item.json().map( b => new BlogPost(b)));
  }
  getData(id) : Observable<BlogPost[]>{
    return this.http.get(this.webApiBaseUrl + `/api/v1/blog/${id}`).map(item => item.json());
  }
  getEditData(id) : Observable<BlogPost>{
    return this.http.get(this.webApiBaseUrl + `/sapi/v1/blog/${id}`).map(item => new BlogPost(item.json()));
  }

}
