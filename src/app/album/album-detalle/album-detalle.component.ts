import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { Comments } from '../comment';

declare var $: any;

@Component({
  selector: 'app-album-detalle',
  templateUrl: './album-detalle.component.html'
})
export class AlbumDetalleComponent implements OnInit {
  idAlbum: number;
  private sub: any;
  detalleAlbum: Album;

    /**
   * Comment form
   */
  comentarioForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private toastrService: ToastrService) {
    this.comentarioForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(500)]],
      rating: ['', [Validators.required, Validators.maxLength(10)]],
    });
   }

/**
  * Author: William Sánchez
  * Description: Metodo que lista el detalle del Album
  * @param 'No Aplica'
  * @returns 'No Aplica'
**/
  getDetalleAlbum(): void {
    this.albumService.getDetailAlbum(this.idAlbum).subscribe(albumDetail =>{
      this.detalleAlbum = albumDetail;
    });
  }

  /**
   * Metodo que carga la ventana modal, para agregar a los artistas
   * @author Héctor Arias
   * @returns `void`
   */
  public abrirModalComentario(){
    $("#comentarioModal").modal("show");
   }
  
   
  /**
   * Metodo que cierra la ventana modal, para agregar a los artistas
   * @author Héctor Arias
   * @returns `void`
   */
  public cancelComment(){
    this.comentarioForm.reset();
    $("#comentarioModal").modal("hide");
  }

  /**
   * Metodo que agrega un comentario
   * @author Héctor Arias
   * @returns `void`
   */
   createComentario(comment: Comments) {
     comment.collector = {id: parseInt(localStorage.getItem('idColeccionista'))};
     console.log(comment);
    this.albumService.createComment(comment, this.idAlbum)
    .subscribe(resultcomment => {
      this.toastrService.success('The comment was created successfully');
      $("#comentarioModal").modal("hide");
      this.comentarioForm.reset();
      this.getDetalleAlbum();
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }

/**
    * Author: William Sánchez
    * Description: Metodo reservado de angular, que indica que el componente esta listo
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idAlbum = +params['id'];
   });
   this.getDetalleAlbum();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
