import { Artista } from '../artista/artista';
import { ColeccionistaAlbum } from './coleccionistaAlbum';
import { Comentario } from './comentario';

export class Coleccionista {
  id: number;
  name: string;
  telephone: string;
  email: string;
  comments: Array<Comentario>;
  favoritePerformers: Array<Artista>;
  collectorAlbums: Array<ColeccionistaAlbum>;
  constructor(
    id?: number,
    name?: string,
    telephone?: string,
    email?: string,
    comments?: Array<Comentario>,
    favoritePerformers?: Array<Artista>,
    collectorAlbums?: Array<ColeccionistaAlbum>
  ) {
    this.id = id;
    this.name = name;
    this.telephone = telephone;
    this.email = email;
    this.comments = comments;
    this.favoritePerformers = favoritePerformers;
    this.collectorAlbums = collectorAlbums;
  }
}
