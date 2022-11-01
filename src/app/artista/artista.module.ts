import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListarComponent } from './artista-listar/artista-listar.component';
import { FiltroBusquedaPipe } from './pipes/filtro-busqueda.pipe';
import { SinFotoArtistaPipe } from './pipes/sin-foto-artista.pipe';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';
import { ArtistaRoutingModule } from './artista-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ArtistaRoutingModule,
    FormsModule
  ],
  declarations: [ArtistaListarComponent, FiltroBusquedaPipe, SinFotoArtistaPipe, ArtistaDetailComponent],
  exports: [ArtistaListarComponent],
})
export class ArtistaModule {
}
