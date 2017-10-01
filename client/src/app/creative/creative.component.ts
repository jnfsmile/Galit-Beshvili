import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { StaticContentService as Content } from '../services/static-content.service';

@Component({
  selector: 'app-creative',
  providers: [ Content ],
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent implements OnInit {
  contentArray = [];
  selectedContent = {};
  currentId = "";

  constructor( private route: ActivatedRoute, private router: Router, public content: Content ) { }

  songs() {
    return this.contentArray.filter(s=>s.type==='song');
  }
  stories() {
    return this.contentArray.filter(s=>s.type==='story');
  }
  shorts() {
    return this.contentArray.filter(s=>s.type==='short');
  }

  onSelect(item) {
    this.router.navigate(['/creative', { id: item.id }]);
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
        this.content.getData("creative").subscribe(res => {
          this.contentArray = res["songs"].concat(res["stories"]).concat(res["shorts"]).map(s => {
            return {id: s.id, name: s.name, words: s.words.replace(/\n/g, "<br />"), intro: s.intro, type: s.type};
          }
        )}, null, () => this.setContent(this.currentId))
      });
  }

}
