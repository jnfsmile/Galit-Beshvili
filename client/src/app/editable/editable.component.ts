import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'editable',
  styles: [`
  `],
  template: `
  <div contenteditable="true" [class.empty]="!text || text.length == 0" [textContent]="text"
    (input)="delayChange($event.target.textContent)" (blur)="onChange($event.target.textContent)"
      (keydown)="onKey($event)"></div>
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

  onKey(e: any) {
    if(e.which ==13) {
      var docFragment = document.createDocumentFragment();

      //add a new line
      var newEle = document.createTextNode('\n');
      docFragment.appendChild(newEle);
      //make the br replace selection
      var range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      range.insertNode(docFragment);

      //create a new range
      range = document.createRange();
      range.setStartAfter(newEle);
      range.collapse(true);

      //make the cursor there
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      //document.execCommand('insertHTML', false, '<br><br>');
      return false;
    }
    return true;
  }
}
