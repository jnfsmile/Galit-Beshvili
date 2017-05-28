import {
  Component,
  AfterViewInit,
  EventEmitter,
  OnDestroy,
  Input,
  Output
} from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'tiny-editor',
  template: `<textarea id="{{elementId}}">{{content}}</textarea>`
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() content: String;
  @Output() onEditorContentChange = new EventEmitter();

  currentWait;
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          if (this.currentWait) {
            clearTimeout(this.currentWait);
            this.currentWait = 0;
          }
          else {
            const content = editor.getContent();
            this.currentWait = setTimeout( this.onEditorContentChange.emit.bind(this, content), 5000);
            this.onEditorContentChange.emit(content);
          }
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
