import { Component, OnInit } from '@angular/core';
import { StaticContentService as Content } from '../services/static-content.service';

@Component({
  selector: 'app-workshop',
  providers: [ Content ],
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  workshopContent = "סדנאות"
  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("workshop").subscribe(res => this.workshopContent = res);
  }

}
