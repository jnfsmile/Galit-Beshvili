import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {BlogPost} from '../blog/blog-post';
import { Tag as SubjectTag } from "./tag";
import {TagService} from './tag.service';
import {BlogService} from '../blog/blog.service';

@Component({
  selector: 'app-tag',
  providers: [ BlogService, TagService ],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  title = "תגית";
  posts = [];

  constructor(private route: ActivatedRoute, private router: Router, public blogService: BlogService, public tagService: TagService) { }

  navigate (id) {
    this.router.navigate(['/blog', {id}]);
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( params['id'] ))
    .subscribe( id => {
      this.tagService.getData(/*[id]*/).subscribe( (tags:SubjectTag[]) => {
        this.title = (tags.length > 0) ? tags.filter(tag => tag.id === id)[0].name : ""
      });
      this.blogService.getByTag( id ).subscribe( (res:BlogPost[]) => {
        if (res.length === 0) return;
        this.posts.push(...res);
      });
    });
  }

}
