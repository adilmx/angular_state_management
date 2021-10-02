import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Story } from '../_models/story.model';
import { AppState } from '../_state/app.state';
import { getStories } from './state/stories.selectors';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  imgStory!: String;
  stories: Observable<Story[]> | undefined;
  counter(i: number) {
    return new Array(i);
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.imgStory = "./assets/mx.png";
    this.stories = this.store.select(getStories);
    console.log(this.stories);
  }

}
