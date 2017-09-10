import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

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
              <input type="date" [value]="lastChange | date:'yyyy-MM-dd'" (input)="lastChange=parseDate($event.target.value)" />
            </div>
            <time pubdate [attr.datetime]="lastChange">{{lastChange | hebdate}}</time>
            <div [froalaEditor]="editorOptions" [(froalaModel)]="body"></div>
            <app-tinymce [(ngModel)]='body'></app-tinymce>
          </header>
          <section>
            <span>תגיות:</span>
            <tag-input [(ngModel)]='taglistFlat'></tag-input>
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
  lastChange = new Date().toISOString();
  taglist = [];
  taglistFlat = [];
  post: BlogPost;

  currentWait: number;
  editorOptions = {
    placeholderText: "תוכן בלוג",
    events : {
      "froalaEditor.blur" : (e, editor) => {
        this.bodyUpdate();
      },
      "froalaEditor.keydown" : (e, editor, keydownEvent) => {
        this.delayUpdate(this.bodyUpdate.bind(this));
      }
    }
  };

  constructor(private route: ActivatedRoute, private router: Router, public content: BlogContentService, public tagService: TagService) {
  }

  gotoTag (tagId) {
    this.router.navigate( [ '/tag', { id: tagId } ] );
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
          this.lastChange = new Date(Date.parse(blog.lastChange)).toISOString();

          this.tagService.getData(/*blog.tags*/).subscribe( (res:SubjectTag[]) => {
              this.taglist=res.filter(tag=>blog.tags.indexOf(tag.id)>=0);
              this.taglistFlat=this.taglist.map( tag => { return { display: tag.name, value: tag.id } } );
            } );
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

  titleUpdate( newTitle: string ) {
    this.post.title = newTitle;
    if ( this.verifyId() ) {
      this.content.update( this.post ).subscribe( /*post => console.log(post)*/ );
    }
  }
  bodyUpdate() {
    this.post.body = this.htmlEncode(this.body);
    //console.log(newBody.substr(150));
    if (this.currentWait) {
      clearTimeout(this.currentWait);
      this.currentWait = 0;
    }
    if (this.verifyId()) {
      this.content.update(this.post).subscribe( /*post => console.log(post)*/ );
    }
  }
  lastChangeUpdate() {
    this.post.lastChange = this.lastChange;
    if (this.verifyId()) {
      this.content.update(this.post).subscribe( /*post => console.log(post)*/ );
    }
  }

  delayUpdate(func) {
    if (this.currentWait) {
      clearTimeout(this.currentWait);
      this.currentWait = 0;
    }
    this.currentWait = setTimeout(func, 5000);
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

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }
}
