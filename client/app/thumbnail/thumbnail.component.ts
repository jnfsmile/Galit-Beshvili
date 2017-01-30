import { Component, Input } from '@angular/core';

console.log('`Thumbnail` component loaded asynchronously');

@Component({
  selector: 'thumbnail',
  styles: [`
  .thumbnail-wrapper {
    margin: auto;
    text-align: center;
  }
  .thumbnail-wrapper > div {
    display: inline-block;
    position: relative;
  }
  .thumbnail-wrapper > div:not(.big):hover:before {
    content: " ";
    cursor: pointer;
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.4;
  }
  [data-thumbnail] {
    width: 4em;
    transition: width 1s;
  }
  .big [data-thumbnail] {
    width: 80%;
  }`],
  template: `
  <div class="thumbnail-wrapper">
    <div (click)="addBigClass()" [ngClass]="{'big': big}" title="לחצי להגדלה">
      <img [src]="src" [alt]="alt" data-thumbnail />
    </div>
  </div>
`
})
export class ThumbnailComponent {
  big = false;
  @Input() src: string;
  @Input() alt: string;

  addBigClass(): void {
    this.big = !this.big;
  }

}
