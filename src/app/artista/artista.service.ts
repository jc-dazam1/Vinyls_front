import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artista } from './artista';
import { Premio } from './premio';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private apiUrl = environment.baseUrl + 'musicians';
  private apiUrlPremios = environment.baseUrl + 'prizes';
  constructor(private http: HttpClient) { }

  /**
    * Author: Héctor Arias
    * Description: Metodo que consulta la lista de artistas almacenados en el sistema
    * @param 'No Aplica'
    * @returns Lista de Artistas
  **/
  getArtistas(): Observable<Array<Artista>> {
    return this.http.get<Array<Artista>>(this.apiUrl);
  }

  /**
    * Author: Héctor Arias
    * Description: Metodo que obtiene la información detalle de un artista
    * @param artistaId Se refiere al id del artista
    * @returns Objeto con la información del detalle del artista
  **/
  getDetailArtista(musicianId): Observable<Artista> {
    return this.http.get<Artista>(`${this.apiUrl}/${musicianId}`);
  }

  /**
    * Author: Héctor Arias
    * Description: Metodo que obtiene los premios de un artista
    * @param prizeId Se refiere al id del premio
    * @returns Objeto con la información del detalle del premio
  **/
  getPremioArtista(prizeId): Observable<Premio> {
  return this.http.get<Premio>(`${this.apiUrlPremios}/${prizeId}`);
  }
}
