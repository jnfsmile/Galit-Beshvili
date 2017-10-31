import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BlogPost } from '../blog/blog-post';
import { BlogService } from '../blog/blog.service';
import { Tag } from '../tag/tag';
import { TagService } from '../tag/tag.service';

@Component({
  selector: 'app-blog-edit',
  providers: [ TagService ],
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  body = "";
  title = "";
  author = "";
  authorEmail = "";
  lastChange = new Date().toISOString();
  taglist = [];
  taglistFlat = [];
  allTaglistFlat = [];
  post: BlogPost;
  visible = false;

  constructor(private route: ActivatedRoute, private router: Router, public content: BlogService, public tagService: TagService) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => Observable.of( params['id'] ))
    .subscribe( id => {
      console.log(id);
      if ( !id ) {
        this.post = new BlogPost();
      }
      else {
        this.content.getEditData(id).subscribe( all => {
          console.log(all);
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
          this.visible = blog.visible;
          this.lastChange = new Date(Date.parse(blog.lastChange)).toISOString();

          this.tagService.getData().subscribe( (res:Tag[]) => {
              this.taglist=res.filter(tag=>blog.tags.indexOf(tag.id)>=0);
              this.allTaglistFlat=res.map( tag => { return { display: tag.name, value: tag.id } } );
              this.taglistFlat=this.taglist.map( tag => { return { display: tag.name, value: tag.id } } );
              this.post.tags = this.taglist.map( tag => tag.id );
            } );
        });
      }
    });
  }

  onTagAdd(tag) {
    this.taglistFlat.push(tag);
    this.onElementChange(tag);
  }
  onTagRemove(tag) {
    this.taglistFlat.splice(this.taglist.indexOf(tag), 1);
    this.onElementChange(tag);
  }
  onElementChange(e) {
    this.postUpdate();
  }

  postUpdate( ) {
    this.post.title = this.title;
    this.post.body = this.htmlEncode(this.body);
    this.post.visible = this.visible;
    this.post.tags = this.taglistFlat.map( t => t.value )
    if ( this.verifyId() ) {
      this.content.update( this.post ).subscribe( /*post => console.log(post)*/ );
    }
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
