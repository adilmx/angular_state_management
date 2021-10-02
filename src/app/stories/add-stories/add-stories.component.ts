import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Story } from 'src/app/_models/story.model';
import { addStory } from '../state/stories.actions';
import { StoryState } from '../state/stories.state';

@Component({
  selector: 'app-add-stories',
  templateUrl: './add-stories.component.html',
  styleUrls: ['./add-stories.component.scss']
})
export class AddStoriesComponent implements OnInit {

  storyForm!: FormGroup;
  constructor(private store: Store<StoryState>) { }

  ngOnInit(): void {
    this.storyForm = new FormGroup({
      title: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      subtitle: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      content: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      username: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      tele: new FormControl(null,[Validators.required]),
    });
  }
  addStory(){
     console.log(this.storyForm);
     const formValue : any = this.storyForm.value;
     const story : Story = {
      id: "id",
      title: formValue.title,
      subtitle: formValue.subtitle,
      content: formValue.content,
      author: {
        id: "id",
        email: formValue.email,
        tele: formValue.tele,
        username: formValue.username
      }
    };
    this.store.dispatch(addStory({story}));

  }

}
