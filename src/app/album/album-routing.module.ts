import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetalleComponent } from './album-detalle/album-detalle.component';
import { AlbumListarComponent } from './album-listar/album-listar.component';

const routes: Routes = [
  {
    path: 'albums',
    children: [

                    { path: 'list', component: AlbumListarComponent },
                    { path: ':id', component: AlbumDetalleComponent },
              ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule { }
