import { Component, OnInit } from "@angular/core";
import { StaticContentService as Content } from "../services/static-content.service";

@Component({
  selector: "app-book",
  providers: [ Content ],
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {

  bookContent = "על הספר";

  constructor(public content: Content) {}

  ngOnInit() {
    this.content.getData("book").subscribe(res => this.bookContent = res);
  }

}
