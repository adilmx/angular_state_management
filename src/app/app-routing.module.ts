import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AddStoriesComponent } from './stories/add-stories/add-stories.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: 'stories',
    component: StoriesComponent,
    children: [{
      path: 'add',
      component: AddStoriesComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
