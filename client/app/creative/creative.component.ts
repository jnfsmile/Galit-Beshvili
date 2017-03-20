import {Component} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Content} from './services/content/index';

@Component({
  selector: 'creative',
  providers: [ Content ],
  template: `
  <section class="page creative">
    <aside>
      <div class="hidden-xs">
        <div>שירים</div>
        <ul class="content-list">
          <li *ngFor="let song of songs()" (click)="onSelect(song)" [class.selected]="song.id===selectedContent.id">
            <a>{{song.name}}</a>
          </li>
        </ul>
        <div>סיפורים</div>
        <ul class="content-list">
          <li *ngFor="let story of stories()" (click)="onSelect(story)" [class.selected]="story.id===selectedContent.id">
            <a>{{story.name}}</a>
          </li>
        </ul>
      </div>
      <div class="visible-xs">
        <select [(ngModel)]="currentId" name="contentSelect">
          <option *ngFor="let song of songs()" (click)="onSelect(song)" [class.selected]="song.id===currentId" [value]="song.id">
            {{song.name}}
          </option>
          <option *ngFor="let story of stories()" (click)="onSelect(story)" [class.selected]="story.id===currentId" [value]="story.id">
            {{story.name}}
          </option>
        </select>
      </div>
    </aside>
    <div *ngIf='currentId!==""'>
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
  contentArray = [];
  selectedContent = {};
  currentId = "";

  constructor( private route: ActivatedRoute, private router: Router, public content: Content ) {

  }

  songs() {
    return this.contentArray.filter(s=>s.type==='song');
  }
  stories() {
    return this.contentArray.filter(s=>s.type==='story');
  }

  onSelect(item) {
    console.log(item);
    this.router.navigate(['/creative', { id: item.id }]);
    //this.setContent(item.id);
  }

  setContent (id) {
    if (!id) return;
    let item = this.contentArray.filter(c => c.id == id)[0];
    this.selectedContent = item;
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => Observable.of(this.currentId = params['id'] || this.currentId))
      .subscribe( () => {
        this.content.getData(null).subscribe(res => {
          this.contentArray = res["songs"].concat(res["stories"]).map(s => {
            return {id: s.id, name: s.name, words: s.words.replace(/\n/g, "<br />"), intro: s.intro, type: s.type};
          }
        )}, null, () => this.setContent(this.currentId))
      });
  }
}
