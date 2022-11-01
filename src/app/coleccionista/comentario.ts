import { Album } from '../album/album';

export class Comentario {
  id: number;
  description: string;
  rating: number;
  album: Album;
  constructor(
    id?: number,
    description?: string,
    rating?: number,
    album?: Album
  ) {
    this.id = id;
    this.description = description;
    this.rating = rating;
    this.album = album;
  }
}
