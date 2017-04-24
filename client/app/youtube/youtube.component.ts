import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

console.log('`Youtube` component loaded asynchronously');

@Component({
  selector: 'youtube',
  styles: [`
    .youtube-wrapper {
      margin: 0;
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
      width: 100%;
    }
    .youtube-wrapper iframe {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    }
  `],
  template: `
  <div class="youtube-wrapper">
    <iframe width="560" height="315" [src]="url" frameborder="0" allowfullscreen></iframe>
  </div>`
})
export class YoutubeComponent implements OnInit{
  big = false;
  @Input() id: string;
  url: SafeResourceUrl;

  constructor (public sanitizer:DomSanitizer) {    }
  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}?rel=0`);
  }
}
