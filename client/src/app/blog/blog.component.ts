import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {BlogPost} from './blog-post';
import {BlogService as BlogContentService} from './blog.service';
import {Tag as SubjectTag} from '../tag/tag';
import {TagService} from '../tag/tag.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ TagService ]
})
export class BlogComponent implements OnInit {

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
        this.lastChange = new Date(blog.lastChange).toISOString();

        this.tagService.getData(/*blog.tags*/).subscribe( (res:SubjectTag[]) => {this.taglist=res.filter(tag=>blog.tags.indexOf(tag.id)>=0)} );
      });
    });
  }

}
