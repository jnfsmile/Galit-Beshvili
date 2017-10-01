import { Component, OnInit } from '@angular/core';
import { StaticContentService as Content } from '../services/static-content.service';

@Component({
  selector: 'app-media',
  providers: [ Content ],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaContent = "בשבילי בתקשורת";

  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("media").subscribe(res => this.mediaContent = res);
  }

}
