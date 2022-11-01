import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFotoAlbum'
})
export class SinFotoAlbumPipe implements PipeTransform {

  transform(value: any): any {

    if (value === '' || value === null) {
        value = 'assets/imagenes/sinFotoAlbum.png';
    }
    return value;

  }
}
