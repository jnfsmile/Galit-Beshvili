import { Component, OnInit } from '@angular/core';
import { StaticContentService as Content } from '../services/static-content.service';

@Component({
  selector: 'app-about',
  providers: [ Content ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutContent = "אודות";

  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("about").subscribe(res => this.aboutContent = res);
  }

}
