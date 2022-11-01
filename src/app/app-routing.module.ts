import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaListarComponent } from './artista/artista-listar/artista-listar.component';

const routes: Routes = [
  {
    path: '', component: ArtistaListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
