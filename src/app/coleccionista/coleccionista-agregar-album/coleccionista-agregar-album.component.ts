import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/album/album.service';
import { ColeccionistaAlbum } from '../coleccionistaAlbum';
import { Album } from 'src/app/album/album';
import { AlbumStatus } from '../albumStatus.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColeccionistaService } from '../coleccionista.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coleccionista-agregar-album',
  templateUrl: './coleccionista-agregar-album.component.html',
})
export class ColeccionistaAgregarAlbumComponent implements OnInit {
  @Input() idCollector: number;
  addAlbumForm: FormGroup;
  albumList: Array<Album>;
  statusList: Array<string>;
  collectorAlbum: ColeccionistaAlbum;

  constructor(
    public activeModal: NgbActiveModal,
    private albumService: AlbumService,
    private coleccionistaService: ColeccionistaService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.collectorAlbum = new ColeccionistaAlbum();
    this.albumList = [];
    this.statusList = [AlbumStatus.ACTIVE, AlbumStatus.INACTIVE];
  }
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Método que inicializa los elementos de la ventana modal para adicionar un álbum a un coleccionista.
   * @author Juan Feliciano
   * @returns `void`
   */
  initForm() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albumList = albums;
      this.coleccionistaService
        .getAlbums(this.idCollector)
        .subscribe((collectorAlbums) => {
          let tempAlbums = new Array<Album>();
          collectorAlbums.forEach((element) => tempAlbums.push(element.album));
          this.albumList = this.albumList.filter(function (array_el) {
            return (
              tempAlbums.filter(function (anotherOne_el) {
                return anotherOne_el.id == array_el.id;
              }).length == 0
            );
          });
          if (this.albumList.length == 0) {
            this.toastrService.warning(
              'You already added to your list all of the available albums in the system.',
              'Warning',
              { closeButton: true }
            );
            this.activeModal.dismiss();
          } else {
            this.albumList.sort((a, b) => a.name.localeCompare(b.name));
          }
        });
    });
    this.addAlbumForm = this.formBuilder.group({
      album: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  /**
   * Método asociado al evento submit del formulario. Delega la adición del álbum al componente caller que invocó la apertura de la ventana suministrando los valores del formulario.
   * @author Juan Feliciano
   * @returns `void`
   */
  passBack(): void {
    if (this.addAlbumForm.valid) {
      this.activeModal.close(this.collectorAlbum);
    }
  }
}
