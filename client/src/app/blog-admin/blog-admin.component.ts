import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BlogPost } from '../blog/blog-post';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit {

  title = "כל הבלוגים - עריכה";
  posts = [];

  constructor(private route: ActivatedRoute, private router: Router, public content: BlogService) {}

  ngOnInit() {
    this.content.getAll().subscribe( all => {
      this.posts = all;
    });
  }

  navigate (id) {
    this.router.navigate(['/blog/edit', {id}]);
  }
}
