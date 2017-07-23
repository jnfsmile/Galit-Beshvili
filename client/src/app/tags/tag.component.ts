import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {SubjectTag} from './index';
import {BlogPost} from '../blog/index';
import {TagService} from './services/content/tag.service';
import {Content as BlogService} from '../blog/services/content/index';

@Component({
  selector: 'tag',
  providers: [ BlogService, TagService ],
  template: `
      <section class="page tag postbatch">
        <h3>{{title}}</h3>
        <article *ngFor="let post of posts">
          <div (click)="navigate(post.id)"><a>{{post.title}}</a></div>
          <div>{{post.author}}</div>
        </article>
      </section>
  `
})
export class TagComponent {

  title = "תגית";
  posts = [];

  constructor(private route: ActivatedRoute, private router: Router, public blogService: BlogService, public tagService: TagService) {

  }

  navigate (id) {
    this.router.navigate(['/blog', {id}]);
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( +params['id'] ))
    .subscribe( id => {
      this.tagService.getData([id]).subscribe( (tags:SubjectTag[]) => this.title = (tags.length>0) ? tags[0].name : "");
      this.blogService.getByTag(id).subscribe( (res:BlogPost[]) => {
        console.log(res);
        if (res.length === 0) return;
        this.posts.push(...res);
      });
    });
  }
}
