import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class StaticContentService {

  constructor(private http: Http) { }

  getData(contentName: string): Observable<string> {
    let webApiBaseUrl = environment.apiUrl;
    return this.http.get(webApiBaseUrl + `/api/v1/static/${contentName}`)
      .map(item => item.json().content);
  }

}
