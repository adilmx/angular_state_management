import { Story } from "src/app/_models/story.model";

export interface StoryState {
  stories: Story[];
}

export const initialState: StoryState = {
  stories: [
    {
      id: "id",
      title: "title",
      subtitle: "subtitle",
      content: "content",
      author: {
        id: "id",
        email: "email",
        tele: "0231231231",
        username: "mxt"
      },
    }
  ]
}
