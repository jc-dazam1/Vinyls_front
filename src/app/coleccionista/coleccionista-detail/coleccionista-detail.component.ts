import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from 'src/app/album/album.service';
import { Coleccionista } from '../coleccionista';
import { ColeccionistaAgregarAlbumComponent } from '../coleccionista-agregar-album/coleccionista-agregar-album.component';
import { ColeccionistaService } from '../coleccionista.service';
import { ColeccionistaAlbum } from '../coleccionistaAlbum';
declare var $: any;

@Component({
  selector: 'app-coleccionista-detail',
  templateUrl: './coleccionista-detail.component.html',
})
export class ColeccionistaDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  public detalleColeccionista: Coleccionista;
  public albumesColeccionista: Array<ColeccionistaAlbum>;
  public verbreadcrumbColeccionista: boolean = false;
  public verbuttonAnnadir: boolean = true;
  public idColeccionista: number;

  constructor(
    private route: ActivatedRoute,
    private coleccionistaService: ColeccionistaService,
    private albumService: AlbumService,
    private toastrService: ToastrService,
    private modalService: NgbModal
  ) {
    this.albumesColeccionista = [];
  }

  /**
   * Método del ciclo de vida invocado en la inicialización del componente.
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.idColeccionista = params['id'];
      this.getDetalleColeccionista(+params['id']);
    });
  }

  /**
   * Carga los datos del coleccionista a partir desde el API y mapea los álbumes
   * y comentarios para renderizarlos de forma correcta en la vista.
   * @argument Juan Feliciano
   * @returns `void`
   */
  private getDetalleColeccionista(id: number): void {
    this.coleccionistaService
      .getDetalleColeccionista(id)
      .subscribe((detalleColeccionista) => {
        this.detalleColeccionista = detalleColeccionista;
        this.cargarAlbumesColeccionista();
        this.cargarAlbumComentarios();
      });
  }

  /**
   * Carga los datos de los álbumes del coleccionista desde el API.
   * @author Juan Feliciano
   * @requires `void`
   */
  private cargarAlbumesColeccionista(): void {
    this.coleccionistaService
      .getAlbums(this.idColeccionista)
      .subscribe((collectorAlbum) => {
        this.albumesColeccionista = collectorAlbum;
      });
  }

  /**
   * Carga la información del álbum asociado a cada comentario desde el API a partir del id del álbum, el cual está disponible en el comentario.
   * @author Juan Feliciano
   * @returns `void`
   */
  private cargarAlbumComentarios(): void {
    this.detalleColeccionista.comments.forEach((comentario) => {
      this.albumService.getDetailAlbum(comentario.id).subscribe((album) => {
        comentario.album = album;
      });
    });
  }

  /**
   * Metodo que carga la ventana modal, para agregar a los artistas
   * @author Héctor Arias
   * @returns `void`
   */
  public abrirModalArtistas() {
    $('#artistasModal').modal('show');
  }

  /**
   * Añade a un artista a la sección de favoritos de un coleccionista
   * @author Héctor Arias
   * @returns `void`
   */
  public annadirArtista(idArtista) {
    this.coleccionistaService
      .addArtistaFavorito(this.idColeccionista, idArtista)
      .subscribe(
        (book) => {
          this.toastrService.success('The artist was add successfully');
          this.getDetalleColeccionista(this.idColeccionista);
        },
        (err) => {
          this.toastrService.error(err, 'Error');
        }
      );
  }

  /**
   * Metodo que carga la ventana modal para agregar un álbum al listado de álbumes disponibles de un coleccionista e invoca el servicio para adicionar el álbum después de cerrarla.
   * @author Juan Feliciano
   * @returns `void`
   */
  public addAlbum(): void {
    const modalRef = this.modalService.open(ColeccionistaAgregarAlbumComponent);
    modalRef.componentInstance.idCollector = this.idColeccionista;
    modalRef.result.then((collectorAlbum) => {
      if (collectorAlbum.id) {
        console.log(collectorAlbum);
        this.coleccionistaService
          .addAlbum(this.idColeccionista, collectorAlbum)
          .subscribe(
            (response) => {
              this.toastrService.success(
                'The Album was added successfully!',
                `Album : ${response.album.name}`,
                {
                  progressBar: true,
                  timeOut: 2000,
                }
              );
              this.cargarAlbumesColeccionista();
            },
            (err) => {
              this.toastrService.error(err, 'Error');
            }
          );
      }
    });
  }

  /**
   * Método de ciclo de vida invocado en la fase de destrucción del componente.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
