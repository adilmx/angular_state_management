import { createAction, props } from "@ngrx/store";
import { Story } from "src/app/_models/story.model";

const ADD_STORY_ACTION = "[stories page] add story";
export const addStory = createAction(ADD_STORY_ACTION,props<{story : Story}>());
