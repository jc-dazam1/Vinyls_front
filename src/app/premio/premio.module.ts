import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremioListarComponent } from './premio-listar/premio-listar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroPremioPipe } from './filtro-premio.pipe';
import { PremioRoutingModule } from './premio-routing.module';
import { PremioCrearComponent } from './premio-crear/premio-crear.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PremioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PremioRoutingModule,
  ],
  declarations: [PremioListarComponent, FiltroPremioPipe, PremioCrearComponent],
  entryComponents: [PremioCrearComponent],
  exports: [PremioListarComponent],
})
export class PremioModule {}
