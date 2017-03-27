import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {BlogPost} from './blog-post';
import {Content} from './services/content/index';
import {TagService} from '../tags/index';

@Component({
  selector: 'blog',
  providers: [ Content, TagService ],
  template: `
      <section class="page blog">
        <article>
          <header>
            <h3>בשבילי - הבלוג</h3>
            <h4>{{title}}</h4>
            <div></div>
            <time pubdate [attr.datetime]="lastChange"></time>
          </header>
          <div [innerHTML]="body"></div>
        </article>
      </section>
  `
})
export class BlogComponent {
  blogContent = "";
  body = "";
  title = "";
  author = "";
  lastChange = "";

  constructor(private route: ActivatedRoute, private router: Router, public content: Content, public tags: TagService) {

  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( params['id'] ))
    .subscribe( id => {
      this.content.getData(id).subscribe((res:BlogPost) => {
        console.log(res);
        if (!res) return;
        this.body = res.body;
        this.title = res.title;
        this.author = res.author;
        this.lastChange = res.lastChange;

        this.tags.getData().subscribe( () => {} );
      });
    });
  }
}
