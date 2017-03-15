import {Component} from '@angular/core';
import {Content} from './services/content/index';

@Component({
  selector: 'creative',
  providers: [ Content ],
  template: `
  <section class="page creative">
    <aside>
      <div>שירים</div>
      <ul class="content-list">
        <li *ngFor="let song of songs" (click)="onSelect(song)" [class.selected]="song.id===selectedContent.id">
          <a>{{song.name}}</a>
        </li>
      </ul>
      <div>סיפורים</div>
      <ul class="content-list">
        <li *ngFor="let story of stories" (click)="onSelect(story)" [class.selected]="story.id===selectedContent.id">
          <a>{{story.name}}</a>
        </li>
      </ul>
    </aside>
    <div *ngIf='selectedContent.id!==""'>
      <div class="song-intro">{{selectedContent.intro}}</div>
      <div [ngClass]="{'song-title': true, 'center': selectedContent.type=='song'}">{{selectedContent.name}}</div>
      <div [ngClass]="{'song-words': true, 'center': selectedContent.type=='song'}" [innerHTML]="selectedContent.words"></div>
      <br />
      <div class="content-end">*************************</div>
    </div>
  </section>
  `,
})
export class CreativeComponent {
  songs = [];
  stories = [];
  selectedContent = {id:""};

  constructor(public content: Content) {

  }

  onSelect(item, center) {
    this.selectedContent = item;
  }

  ngOnInit() {
  this.content.getData("songs").subscribe(res => this.songs = res.map(s => {return {name: s.name, words: s.words.replace(/\n/g, "<br />"), intro: s.intro, type: s.type};}));
  this.content.getData("stories").subscribe(res => this.stories = res.map(s => {return {name: s.name, words: s.words.replace(/\n/g, "<br />"), type: s.type};}));
  }
}
