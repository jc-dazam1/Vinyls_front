import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../album';

@Pipe({
  name: 'filtroBusqueda',
  pure: false
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(items: Album[], filter: Album): Album[] {
    if (!items || !filter) {
      return items;
    }
    // matriz de elementos de filtro, los elementos que coinciden y devuelven verdadero se mantendrán, falso se filtrará
    return items.filter((item: Album) => this.applyFilter(item, filter));
  }

  /**
   * Realice el filtrado.
   *
   * @param {Artista} artista El Artista para comparar con el filtro.
   * @param {Artista} filter El filtro a aplicar.
   * @return {boolean} Verdadero si el artista satisface los filtros, falso si no.
   */
  applyFilter(artista: Album, filter: Album): boolean {
    for (let field in filter) {
        if (typeof filter[field] === 'string') {
          if (artista[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }
    }
    return true;
  }
}
