import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule , NbButtonModule } from '@nebular/theme';
import { AddStoriesComponent } from './add-stories/add-stories.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddStoriesComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
  ]
})
export class StoriesModule { }
