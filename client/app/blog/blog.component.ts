import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';
//import * as Hebcal from 'hebcal';
declare var Hebcal: any;

import {BlogPost} from './blog.post';
import {Content as BlogContentService} from './services/content/index';
import {SubjectTag} from '../tags/index';
import {TagService} from '../tags/services/content/index';

@Component({
  selector: 'blog',
  providers: [ /*BlogContentService,*/ TagService ],
  template: `
      <section class="page blog">
        <article>
          <header>
            <h3>בשבילי - הבלוג</h3>
            <h4>{{title}}</h4>
            <div>
              <a [href]="'mailto:'+authorEmail">{{author}}</a>,
              <time pubdate [attr.datetime]="lastChange">{{lastChange}}</time>
            </div>
          </header>
          <div [innerHTML]="body"></div>
          <section>
            <span>תגיות:</span>
            <ul>
              <li *ngFor="let tag of taglist">
                <a (click)="gotoTag(tag.id)" [href]="'/tag/'+tag.id">{{tag.name}}</a>
              </li>
            </ul>
          </section>
        </article>
      </section>
  `
})
export class BlogComponent {
  blogContent = "";
  body = "";
  title = "";
  author = "";
  authorEmail = "";
  lastChange = "";
  taglist = [];

  constructor(private route: ActivatedRoute, private router: Router, public content: BlogContentService, public tagService: TagService) {

  }

  gotoTag (tagId) {
    this.router.navigate(['/tag', { id: tagId }]);
    return false;
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( params['id'] ))
    .subscribe( id => {
      this.content.getData(id).subscribe( all => {
        if (!all) return;
        let blog = new BlogPost(all);
        this.body = blog.body;
        this.title = blog.title;
        this.author = blog.author;
        this.authorEmail = blog.authorEmail;
        this.lastChange = new Hebcal.HDate(new Date(blog.lastChange)).toString('h');

        this.tagService.getData(blog.tags).subscribe( (res:SubjectTag[]) => {this.taglist=res} );
      });
    });
  }
}
