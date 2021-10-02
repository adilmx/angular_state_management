import { createReducer, on } from "@ngrx/store";
import { addStory } from "./stories.actions";
import { initialState } from "./stories.state";

const _storyReducer = createReducer(initialState,on(addStory, (state,action) =>{
  let story = {...action.story};
return {
  ...state,
  stories : [...state.stories,story],
};
})
);
export function storyReducer(state: any, action: any) {
  return _storyReducer(state, action);
}
