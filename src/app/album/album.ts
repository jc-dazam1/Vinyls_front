import { Performer } from "./performer";
import { Comments } from "./comment";

export class Album {
  id: number;
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;
  performers: Performer[];
  comments: Comments[];

  constructor(id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    description: string,
    genre: string,
    recordLabel: string,
    performers: Performer[],
    comments: Comments[]
  ){
    this.id= id;
    this.name= name;
    this.cover= cover;
    this.releaseDate= releaseDate;
    this.description= description;
    this.genre= genre;
    this.recordLabel= recordLabel;
    this.performers = performers;
    this.comments = comments;
  }

}
