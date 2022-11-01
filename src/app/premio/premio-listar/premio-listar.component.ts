import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Premio } from 'src/app/artista/premio';
import { PremioCrearComponent } from '../premio-crear/premio-crear.component';
import { PremioService } from '../premio.service';

@Component({
  selector: 'app-premio-listar',
  templateUrl: './premio-listar.component.html',
})
export class PremioListarComponent implements OnInit {
  prizes: Array<Premio>;
  filter: Premio;

  constructor(
    public _router: Router,
    private prizesService: PremioService,
    private toastrService: ToastrService,
    private modalService: NgbModal
  ) {
    this.prizes = new Array();
    this.filter = new Premio();
  }

  /**
   * Método del ciclo de vida invocado en la inicialización del componente.
   */
  ngOnInit() {
    this.loadPrizes();
  }

  /**
   * Carga el listado de premios creados en el sistema invocando el servicio en el backend.
   */
  loadPrizes(): void {
    this.prizesService.getPrizes().subscribe((prizes) => {
      this.prizes = prizes;
    });
  }

  /**
   * Metodo que carga la ventana modal para crear un premio.
   * @author Juan Feliciano
   * @returns `void`
   */
  create(): void {
    const modalRef = this.modalService.open(PremioCrearComponent);
    modalRef.result.then((prize) => {
      if (prize.name) {
        this.prizesService.create(prize).subscribe(
          (response) => {
            this.toastrService.success(
              'The Prize was Created successfully!',
              `ID assigned : ${response.id}`,
              {
                progressBar: true,
                timeOut: 2000,
              }
            );
            this.loadPrizes();
          },
          (err) => {
            this.toastrService.error(err, 'Error');
          }
        );
      }
    });
  }
}
