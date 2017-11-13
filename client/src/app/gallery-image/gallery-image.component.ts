import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gallery-image",
  templateUrl: "./gallery-image.component.html",
  styleUrls: ["./gallery-image.component.scss"]
})
export class GalleryImageComponent implements OnInit {

  big = false;
  @Input() src: string;
  @Input() alt: string;
  @Input() map: string;

  constructor() { }

  ngOnInit() { }

  addBigClass(): void {
    this.big = !this.big;
  }
}
