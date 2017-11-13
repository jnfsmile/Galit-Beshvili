import { Component, OnInit } from "@angular/core";
import { StaticContentService as Content } from "../services/static-content.service";

@Component({
  selector: "app-contact",
  providers: [ Content ],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {

  contactContent = "דרכי יצירת קשר";

  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("contact").subscribe(res => this.contactContent = res);
  }

}
