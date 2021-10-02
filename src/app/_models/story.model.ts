import { Author } from "./author.model";

export interface Story {
    id?: String ;
    title?: String;
    subtitle?: String;
    content?: String;
    author?: Author;
}
