import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFotoArtista'
})
export class SinFotoArtistaPipe implements PipeTransform {

  transform(value: any): any {

    if (value === '' || value === null) {
        value = 'assets/imagenes/sinFotoArtista.png';
    }
    return value;

  }
}
