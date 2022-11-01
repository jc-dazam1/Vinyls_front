import { Pipe, PipeTransform } from '@angular/core';
import { Artista } from '../artista';

@Pipe({
  name: 'filtroBusqueda',
  pure: false
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(items: Artista[], filter: Artista): Artista[] {
    if (!items || !filter) {
      return items;
    }
    // matriz de elementos de filtro, los elementos que coinciden y devuelven verdadero se mantendrán, falso se filtrará
    return items.filter((item: Artista) => this.applyFilter(item, filter));
  }

  /**
   * Realice el filtrado.
   *
   * @param {Artista} artista El Artista para comparar con el filtro.
   * @param {Artista} filter El filtro a aplicar.
   * @return {boolean} Verdadero si el artista satisface los filtros, falso si no.
   */
  applyFilter(artista: Artista, filter: Artista): boolean {
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
