import { Album } from '../album/album';
import { PremioInterprete } from './premioInterprete';

export class Artista {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;
  albums: Album[];
  performerPrizes: PremioInterprete[];
  creationDate: Date;

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    birthDate: Date,
    albums: Album[],
    performerPrizes: PremioInterprete[],
    creationDate?: Date
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.birthDate = birthDate;
    this.albums = albums;
    this.performerPrizes = performerPrizes;
    this.creationDate = creationDate;
  }
}
