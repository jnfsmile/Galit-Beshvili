import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {GoogleAnalyticsEventsService} from "./services/google-analytics-events.service";
import { BlogService } from './blog/blog.service';
import { BlogPost } from './blog/blog-post';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';

declare let ga: Function;

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

 constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService, public bContent: BlogService) {
   this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
 }
 ngOnInit() {
  this.bContent.getLastId().subscribe( posts => {
    let id = new BlogPost(posts[0]).id;
    this.latestBlog = `/blog;id=${id}`;
  })
 }
}
