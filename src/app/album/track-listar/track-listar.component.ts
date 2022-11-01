import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from '../album.service';
import { Track } from '../track';

declare var $: any;

@Component({
  selector: 'app-track-listar',
  templateUrl: './track-listar.component.html'
})
export class TrackListarComponent implements OnInit {
  @Input() idAlbum: number;
  createTrackForm: FormGroup;
  constructor(private albumService: AlbumService, private toastrService: ToastrService, private formBuilder: FormBuilder) {
    this.createTrackForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(20)]],
      duration: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  tracks: Array<Track>;
 /**
    * Author: William Sánchez
    * Description: Metodo que lista las canciones de un album
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  getTracks(): void{
    this.albumService.getTracks(this.idAlbum).subscribe(tracks => {
      this.tracks = tracks;
    });
  }

  /**
    * Author: William Sánchez
    * Description: Metodo reservado de angular, que indica que el componente esta lista
    * @param 'No Aplica'
    * @returns 'No Aplica'
  **/
  ngOnInit() {
    this.getTracks();
  }

  public newAlbumModal(){
    $("#newTrackModal").modal("show");
  }

  public cancelCreateTrack(){
    this.createTrackForm.reset();
    $("#newTrackModal").modal("hide");
  }

  public createTrack(track: Track){
    this.albumService.createTrack(this.idAlbum, track).subscribe(track =>{
      if(track)
       this.toastrService.success('The track is created successfully');
       this.createTrackForm.reset(); // Noncompliant {{This line will not be executed in a loop; only the first line of this 3-line block will be. The rest will execute unconditionally.}}
       this.getTracks();
    }, er => {
      this.toastrService.error(er, 'Error');
    });
  }

}
