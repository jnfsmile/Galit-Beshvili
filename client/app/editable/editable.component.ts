import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'editable',
  styles: [`
  `],
  template: `
  <div contenteditable="true" [textContent]="text" (input)="delayChange($event.target.textContent)" (blur)="onChange($event.target.textContent)">{{text}}</div>
  `
})
export class EditableComponent implements OnInit {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  currentWait: number;

  constructor (public sanitizer:DomSanitizer) {    }
  ngOnInit() {

  }

  delayChange(newText: string) {
    if (this.currentWait) {
      clearTimeout(this.currentWait);
      this.currentWait = 0;
    }
    this.currentWait = setTimeout( this.onChange.bind(this, newText), 5000);
  }

  onChange(newText: string) {
    this.text = newText;
    this.textChange.emit(this.text);
  }
}
