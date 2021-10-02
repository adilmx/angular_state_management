import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoryState } from "./stories.state";

const getStoryState = createFeatureSelector<StoryState>('story');

export const getStories = createSelector(getStoryState,(state)=>{
  console.log(state.stories);
  return state.stories;
});
