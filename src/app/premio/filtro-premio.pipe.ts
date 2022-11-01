import { Pipe, PipeTransform } from '@angular/core';
import { Premio } from '../artista/premio';

@Pipe({
  name: 'prizesFilter',
  pure: false,
})
export class FiltroPremioPipe implements PipeTransform {
  /**
   * Aplica un filtro sobre un arreglo de premios a partir de un objeto `Premio`suministrado.
   * @author Juan Feliciano
   * @param items Listado de premios que se quiere filtrar.
   * @param filter Objeto con los criterios de filtro.
   */
  transform(items: Array<Premio>, filter?: Premio): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Premio) => this.applyFilter(item, filter));
  }

  /**
   * Determina si el premio suministrado en el parámetro item cumple con los criterios de filtro suministrados en el parámetro filtro.
   * @author Juan Feliciano
   * @param {Premio} item El premio a comparar contra el filtro.
   * @param {Premio} filtro El filtro que se aplicará.
   * @return {boolean} True si el premio dado satisface el filtro, false en caso contrario.
   */
  applyFilter(item: Premio, filtro: Premio): boolean {
    for (let field in filtro) {
      if (typeof filtro[field] === 'string') {
        if (item[field].toLowerCase().indexOf(filtro[field].toLowerCase()) === -1) {
          return false;
        }
      }
    }
    return true;
  }
}
