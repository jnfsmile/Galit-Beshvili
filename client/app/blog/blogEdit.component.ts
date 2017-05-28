import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';
//import * as Hebcal from 'hebcal';

import {BlogPost} from './blog.post';
import {Content as BlogContentService} from './services/content/index';
import {SubjectTag} from '../tags/index';
import {TagService} from '../tags/services/content/index';

@Component({
  selector: 'blogedit',
  providers: [ /*Content,*/ TagService ],
  template: `
      <section class="page blog">
        <article>
          <header>
            <h3>בשבילי - הבלוג</h3>
            <editable [text]="title" (textChange)="titleUpdate($event)">{{title}}</editable>
            <div>
              <a [href]="'mailto:'+authorEmail">{{author}}</a>,
              <time pubdate [attr.datetime]="lastChange">{{lastChange}}</time>
            </div>
            <time pubdate [attr.datetime]="lastChange"></time>
            <editable [text]="body" (textChange)="bodyUpdate($event)">{{body}}</editable>
          </header>
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
  post: BlogPost;

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
      if ( !id ) {
        this.post = new BlogPost();
      }
      else {
        this.content.getData(id).subscribe( all => {
          if ( !all ) {
            this.post = new BlogPost();
            return;
          }
          let blog = new BlogPost(all);
          this.post = blog;
          this.body = this.htmlDecode(blog.body);
          this.title = blog.title;
          this.author = blog.author;
          this.authorEmail = blog.authorEmail;
          this.lastChange = blog.lastChange;

          this.tagService.getData(blog.tags).subscribe( (res:SubjectTag[]) => {this.taglist=res} );
        });
      }
    });
  }

  verifyId() {
    if (!this.post || !this.post.id) {
      if (this.post.title !== "" && this.post.body !== "") {
        this.content.save(this.post)
        .subscribe( res => this.post.id = res.id )
      }
      return false;
    }
    return true;
  }

  titleUpdate(newTitle: string) {
    this.post.title = newTitle;
    if (this.verifyId()) {
      this.content.update(this.post).subscribe( /*post => console.log(post)*/ );
    }
  }
  bodyUpdate(newBody: string) {
    this.post.body = this.htmlEncode(newBody);
    console.log(newBody.substr(150));
    if (this.verifyId()) {
      this.content.update(this.post).subscribe( /*post => console.log(post)*/ );
    }
  }
  htmlEncode(mdStr: string) {
    let htmlStr = "<p>" + mdStr + "</p>";
    htmlStr = htmlStr
      .replace(/\n\n/gi, "</p><p>")
      .replace(/\n/gi, "<br />");
    return htmlStr;
  }
  htmlDecode(htmlStr: string) {
    let mdStr = htmlStr
      .replace(/<br \/>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<p>/gi, "");
    return mdStr;
  }
}
