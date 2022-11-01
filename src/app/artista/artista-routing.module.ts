import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';
import { ArtistaListarComponent } from './artista-listar/artista-listar.component';


const routes: Routes = [
  {
    path: 'artistas',
    children: [

                    { path: 'list', component: ArtistaListarComponent },
                    { path: ':id', component: ArtistaDetailComponent },
              ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaRoutingModule {}
