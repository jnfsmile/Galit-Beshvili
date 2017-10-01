import { Component } from '@angular/core';
import { BlogService } from './blog/blog.service';
import { BlogPost } from './blog/blog-post';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ BlogService ]
})
export class AppComponent {
siteLogo = 'assets/images/site-logo.png';
 name = 'גלית פרידמן';
 url = '/';
 latestBlog='/blog/';

 constructor(public bContent: BlogService) { }
 ngOnInit() {
  this.bContent.getLastId().subscribe( posts => {
    let id = new BlogPost(posts[0]).id;
    this.latestBlog = `/blog;id=${id}`;
  })
 }
}
