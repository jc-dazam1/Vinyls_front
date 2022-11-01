import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';
import { Premio } from '../premio';
import { PremioInterprete } from '../premioInterprete';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html'
})
export class ArtistaDetailComponent implements OnInit, OnDestroy {
  idArtista: number;
  private subscribeRoute: any;
  public detalleArtista: Artista;
  public premios: Premio[];
  public premioInterprete: PremioInterprete[];

  constructor(private route: ActivatedRoute,
    private artistaService: ArtistaService) {}

  ngOnInit() {
    this.subscribeRoute = this.route.params.subscribe(params => {
       this.idArtista = +params['id'];
    });
    this.getDetailArtista();
  }

  getDetailArtista(): void {
    this.artistaService.getDetailArtista(this.idArtista)
      .subscribe(artistaDetail => {
        this.detalleArtista = artistaDetail;
        this.getPremioArtista();
      });

  }

  getPremioArtista(): void {
      this.detalleArtista.performerPrizes.forEach(premio => {
        this.artistaService.getPremioArtista(premio.id)
        .subscribe(premio_r => {
          this.premios = [];
          this.premios.push({id: premio_r.id,name : premio_r.name, organization: premio_r.organization,
            description: premio_r.description, performerPrizes: null, premiationDate: premio.premiationDate});
        });
      });
  }

  ngOnDestroy() {
    this.subscribeRoute.unsubscribe();
  }
}
