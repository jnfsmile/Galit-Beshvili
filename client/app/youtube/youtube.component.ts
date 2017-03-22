import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

console.log('`Youtube` component loaded asynchronously');

@Component({
  selector: 'youtube',
  styles: [`
    .youtube-wrapper {
      display: flex;
      justify-content: center;
      margin: 0 0 0.7em;
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
