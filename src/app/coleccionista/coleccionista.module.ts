import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColeccionistaListarComponent } from './coleccionista-listar/coleccionista-listar.component';
import { FiltroColeccionistasPipe } from './filtro-coleccionistas.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ColeccionistaDetailComponent } from './coleccionista-detail/coleccionista-detail.component';
import { ColeccionistaRoutingModule } from './coleccionista-routing.module';
import { ArtistaModule } from '../artista/artista.module';
import { ColeccionistaAgregarAlbumComponent } from './coleccionista-agregar-album/coleccionista-agregar-album.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ColeccionistaRoutingModule,
    ArtistaModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ColeccionistaListarComponent,
    FiltroColeccionistasPipe,
    ColeccionistaDetailComponent,
    ColeccionistaAgregarAlbumComponent,
  ],
  entryComponents: [ColeccionistaAgregarAlbumComponent],
  exports: [ColeccionistaListarComponent],
})
export class ColeccionistaModule {}
