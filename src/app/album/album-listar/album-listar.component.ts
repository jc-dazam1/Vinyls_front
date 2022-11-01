import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html'
})
export class AlbumListarComponent implements OnInit {

  createAlbumForm: FormGroup;
  filter: Album = new Album(null, null, null, null, null, null, null, null, null);
  albums: Array<Album>;
  constructor(public _router: Router,private albumService: AlbumService, private toastrService: ToastrService, private formBuilder: FormBuilder) {
    this.albums = [];
    this.createAlbumForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(20)]],
      cover: ['', [Validators.required, Validators.maxLength(500)]],
      releaseDate: ['', [Validators.required,]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      genre: ['', [Validators.required, Validators.maxLength(20)]],
      recordLabel: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

   /**
    * Author: William Sánchez
    * Description: Metodo que lista todos los albumes
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  getAlbums(): void{
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
  /**
    * Author: William Sánchez
    * Description: Metodo reservado de angular, que indica que el componente esta listo
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  ngOnInit() {
    this.getAlbums();
  }

   /**
    * Author: William Sánchez
    * Description: Metodo que enruta al detalle del album
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  irDetalleAlbum(id): void {
    this._router.navigate(['albums/', id]);
  }

  public newAlbumModal(){
    $("#newAlbumModal").modal("show");
  }

  public createAlbum(album: Album){
    this.albumService.createAlbum(album).subscribe(album =>{
      if(album)
       this.toastrService.success('The album is created successfully');
       $("#newAlbumModal").modal("hide"); // Noncompliant {{This line will not be executed in a loop; only the first line of this 4-line block will be. The rest will execute unconditionally.}}
       this.createAlbumForm.reset();
       this.getAlbums();
    }, er => {
      this.toastrService.error(er, 'Error');
    });
  }

  public cancelCreateAlbum(){
    this.createAlbumForm.reset();
    $("#newAlbumModal").modal("hide");
  }
}
