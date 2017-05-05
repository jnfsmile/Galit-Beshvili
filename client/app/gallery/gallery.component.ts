import { Component, Input } from '@angular/core';

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
