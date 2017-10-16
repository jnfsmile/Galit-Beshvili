import { Component, OnInit } from '@angular/core';
import { StaticContentService as Content } from '../services/static-content.service';

@Component({
  selector: 'app-personal',
  providers: [ Content ],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalContent = "תהליך אישי";

  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("personal").subscribe(res => this.personalContent = res);
  }
}
