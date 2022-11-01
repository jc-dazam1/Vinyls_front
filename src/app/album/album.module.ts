import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { TrackListarComponent } from './track-listar/track-listar.component';
import { AlbumDetalleComponent } from './album-detalle/album-detalle.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroBusquedaPipe } from '../album/pipes/filtro-busqueda.pipe';
import { SinFotoAlbumPipe } from './pipes/sin-foto-album.pipe';
import { AlbumRoutingModule } from './album-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AlbumRoutingModule
  ],
  declarations: [	FiltroBusquedaPipe, SinFotoAlbumPipe, AlbumListarComponent, AlbumDetalleComponent, TrackListarComponent],
  exports: [AlbumListarComponent, AlbumDetalleComponent, TrackListarComponent],
})
export class AlbumModule { }


