import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  big = false;
  @Input() id: string;
  url: SafeResourceUrl;

  constructor (public sanitizer:DomSanitizer) {    }
  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}?rel=0`);
  }
}
