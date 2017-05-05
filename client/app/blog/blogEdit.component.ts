import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {BlogPost} from './blog.post';
import {Content} from './services/content/index';
import {SubjectTag} from '../tags/index';
import {TagService} from '../tags/services/content/index';

@Component({
  selector: 'blogedit',
  providers: [ Content, TagService ],
  template: `
      <section class="page blog">
        <article>
          <header>
            <h3>בשבילי - הבלוג</h3>
            <editable [text]="title" (textChange)="textUpdate($event)"></editable>
            <div><a [href]="'mailto:'+authorEmail">{{author}}</a></div>
            <time pubdate [attr.datetime]="lastChange"></time>
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
export class BlogEditComponent {
  blogContent = "";
  body = "";
  title = "";
  author = "";
  authorEmail = "";
  lastChange = "";
  taglist = [];

  constructor(private route: ActivatedRoute, private router: Router, public content: Content, public tagService: TagService) {

  }

  gotoTag (tagId) {
    this.router.navigate(['/tag', { id: tagId }]);
    return false;
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( params['id'] ))
    .subscribe( id => {
      this.content.getData().subscribe( all => {
        if (!all) return;
        let blog = new BlogPost(all[0]);
        this.body = blog.body;
        this.title = blog.title;
        this.author = blog.author;
        this.authorEmail = blog.authorEmail;
        this.lastChange = blog.lastChange;

        this.tagService.getData(blog.tags).subscribe( (res:SubjectTag[]) => {this.taglist=res} );
      });
    });
  }

  textUpdate(newText: string) {
    console.log(newText);
  }
}
