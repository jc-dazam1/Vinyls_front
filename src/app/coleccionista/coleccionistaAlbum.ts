import { Album } from '../album/album';
import { AlbumStatus } from './albumStatus.enum';

export class ColeccionistaAlbum {
  id: number;
  price: number;
  status: AlbumStatus;
  album: Album;
  constructor(
    id?: number,
    price?: number,
    status?: AlbumStatus,
    album?: Album
  ) {
    this.id = id;
    this.price = price;
    this.status = status;
    this.album = album;
  }
}
