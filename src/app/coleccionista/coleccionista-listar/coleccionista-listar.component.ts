import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coleccionista } from '../coleccionista';
import { ColeccionistaService } from '../coleccionista.service';

@Component({
  selector: 'app-coleccionista-listar',
  templateUrl: './coleccionista-listar.component.html',
})
export class ColeccionistaListarComponent implements OnInit {
  filtro: Coleccionista = new Coleccionista();

  coleccionistas: Array<Coleccionista>;

  constructor(
    public _router: Router,
    private coleccionistaService: ColeccionistaService
  ) {
    this.coleccionistas = [];
  }

  /**
   * Obtiene el listado de coleccionistas desde el backend y lo carga en el array de coleccionistas para que sea renderizado en la vista.
   * @author Juan Feliciano
   * @return {void}
   */
  getColeccionistas(): void {
    this.coleccionistaService
      .getColeccionistas()
      .subscribe((coleccionistas) => {
        this.coleccionistas = coleccionistas;
      });
  }

  /**
   * Método del ciclo de vida invocado en la inicialización del componente.
   */
  ngOnInit() {
    this.getColeccionistas();
  }

  /**
   * Metodo para navegar al detalle de un coleccionista.
   * @author Juan Feliciano
   * @param idColeccionista Identificador del coleccionista.
   * @returns `void`
   **/
  verDetalleColeccionista(idColeccionista: number): void {
    this._router.navigate(['/coleccionistas', idColeccionista]);
  }
}
