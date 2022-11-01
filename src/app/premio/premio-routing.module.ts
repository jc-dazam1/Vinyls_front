import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremioListarComponent } from './premio-listar/premio-listar.component';
import { FiltroPremioPipe } from './filtro-premio.pipe';

const routes: Routes = [
  {
    path: 'premios',
    children: [{ path: 'list', component: PremioListarComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioRoutingModule {}
