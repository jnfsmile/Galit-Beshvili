import { Component, Input } from '@angular/core';

console.log('`GalleryImage` component loaded asynchronously');

@Component({
  selector: 'gallery-image',
  styles: [`
  .gallery-image-wrapper {
    margin: auto;
    text-align: center;
  }
  .gallery-image-wrapper > div {
    display: inline-block;
    position: relative;
  }
  /*.gallery-image-wrapper > div:not(.big):hover:before {
    content: " ";
    cursor: pointer;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.4;
  }*/
  [data-gallery-image] {
    width: 80%;
    cursor: pointer;
    /*transition: all 1s;*/
  }
  .big:before {
    content: " ";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.4;
  }
  .big [data-gallery-image] {
    width: 60vw;
    position: fixed;
    top: 5vh;
    right: 20vw;
  }`],
  template: `
  <div class="gallery-image-wrapper">
    <div (click)="addBigClass()" [ngClass]="{'big': big}" title="לחצי להגדלה">
      <img [src]="src" [alt]="alt" [attr.usemap]="'#' + map" data-gallery-image />
    </div>
  </div>
`
})
export class GalleryImageComponent {
  big = false;
  @Input() src: string;
  @Input() alt: string;
  @Input() map: string;

  addBigClass(): void {
    this.big = !this.big;
  }

}
