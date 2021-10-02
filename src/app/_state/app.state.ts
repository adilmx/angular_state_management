import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { storyReducer } from "../stories/state/stories.reducer";
import { StoryState } from "../stories/state/stories.state";

export interface AppState{
  storyState: StoryState;
}

export const appReducer = {
  story : storyReducer
}
