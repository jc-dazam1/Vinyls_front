import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-listar',
  templateUrl: './artista-listar.component.html'
})
export class ArtistaListarComponent implements OnInit {
  @Input() verbreadcrumb: boolean = true; 
  @Input() verbtnAnnadir: boolean = false; 
  @Output() idArtista = new EventEmitter<number>();

  filter: Artista = new Artista(null,null,null,null,null,null,null);
  selectedBook: Artista;
  artistas: Array<Artista>;

  constructor(public _router: Router,
    private artistaService: ArtistaService) {
    this.artistas = [];
   }

  /**
    * Author: Héctor Arias
    * Description: Metodo reservado de angular, que indica que el componente esta
    * listo para ser usado
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  ngOnInit() {
  this.getArtistas();
  }

  /**
    * Author: Héctor Arias
    * Description: Metodo que consulta la lista de artistas almacenados en el sistema
    * @param 'No Aplica'
    * @returns Lista de artistas mapeado con el modelo artista, ordernado alfabeticamente.
  **/
  getArtistas(): void {
    this.artistaService.getArtistas()
      .subscribe(artistas => {
        this.artistas = artistas;
      });
  }

  /**
    * Author: Héctor Arias
    * Description: Metodo que consulta el detalle de un artista
    * @param id identificador unico para cada artista
    * @returns Objeto de tipo artista con la información detalle
  **/
    irDetalleArtista(id): void {
      if(this.verbtnAnnadir == false){
      this._router.navigate(['artistas/', id]);
      }
    }

    annadirArtista(id): void {
      this.idArtista.emit(id);
    }
}
