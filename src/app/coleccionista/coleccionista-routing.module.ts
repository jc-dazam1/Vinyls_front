import { NgModule } from '@angular/core';
import { ColeccionistaListarComponent } from './coleccionista-listar/coleccionista-listar.component';
import { ColeccionistaDetailComponent } from './coleccionista-detail/coleccionista-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coleccionistas',
    children: [
      { path: 'list', component: ColeccionistaListarComponent },
      { path: ':id', component: ColeccionistaDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColeccionistaRoutingModule {}
