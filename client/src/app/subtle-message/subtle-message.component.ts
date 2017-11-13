import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtle-message',
  templateUrl: './subtle-message.component.html',
  styleUrls: ['./subtle-message.component.scss']
})
export class SubtleMessageComponent {

  _message = "";

  @Input()
  set message(message: string) {
    this._message = message;
    setTimeout(() => this._message = "", 6000);
  }
  get message() { return this._message; }

}
