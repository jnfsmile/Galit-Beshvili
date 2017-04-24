import { Component, Input } from '@angular/core';

console.log('`Gallery` component loaded asynchronously');

@Component({
  selector: 'gallery',
  styles: [``],
  template: `
  <div></div>
`
})
export class GalleryComponent {
  @Input() alt: string;

}
