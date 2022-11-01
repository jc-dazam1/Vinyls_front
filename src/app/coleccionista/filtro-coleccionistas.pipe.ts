import { Pipe, PipeTransform } from '@angular/core';
import { Coleccionista } from './coleccionista';

@Pipe({
  name: 'filtroColeccionistas',
  pure: false,
})
export class FiltroColeccionistasPipe implements PipeTransform {
  /**
   * @author Juan Feliciano
   * @param items Lista de coleccionistas que se quiere filtrar.
   * @param filtro Objeto con los criterios de filtro.
   * @return {Coleccionista[]} Listado de coleccionistas que hacen match con el filtro suministrado.
   */
  transform(items: Coleccionista[], filtro: Coleccionista): Coleccionista[] {
    if (!items || !filtro) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Coleccionista) =>
      this.applyFilter(item, filtro)
    );
  }

  /**
   * Determina si el coleccionista suministrado en el parámetro item cumple con los criterios de filtro suministrados en el parámetro filtro.
   * @author Juan Feliciano
   * @param {Coleccionista} item El coleccionista a comparar contra el filtro.
   * @param {Coleccionista} filtro El filtro que se aplicará.
   * @return {boolean} True si el coleccionista dado satisface el filtro, false en caso contrario.
   */
  applyFilter(item: Coleccionista, filtro: Coleccionista): boolean {
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
