import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  big = false;
  @Input() src: string;
  @Input() alt: string;
  @Input() map: string;

  addBigClass(): void {
    this.big = !this.big;
  }

}
