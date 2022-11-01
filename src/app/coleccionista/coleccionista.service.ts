import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coleccionista } from './coleccionista';
import { ColeccionistaAlbum } from './coleccionistaAlbum';

@Injectable({
  providedIn: 'root',
})
export class ColeccionistaService {
  private apiUrl = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) {}

  /**
   * Retorna el listado de todos los coleccionistas registrados en el sistema.
   * @author Juan Feliciano
   * @return Un objeto `Observable` con el listado de coleccionistas registrados en el sistema.
   */
  getColeccionistas(): Observable<Array<Coleccionista>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<Coleccionista>>(this.apiUrl);
  }

  /**
   * Retorna los datos del detalle de un coleccionista a partir de un `id` suministrado.
   * @author Juan Feliciano
   * @param id El `id` del coleccionista que se quiere recuperar desde el API.
   * @returns Un objeto `Observable` con el detalle de los datos del coleccionista.
   */
  getDetalleColeccionista(id: number): Observable<Coleccionista> {
    return this.http.get<Coleccionista>(`${this.apiUrl}/${id}`);
  }

  /**
   * Retorna el listado de álbumes del coleccionista.
   * @author Juan Feliciano
   * @param id El `id` del coleccionista que se quiere recuperar desde el API.
   * @returns Un objeto `Observable` con el listado de álbumes del coleccionista.
   */
  getAlbums(id: number): Observable<Array<ColeccionistaAlbum>> {
    return this.http.get<Array<ColeccionistaAlbum>>(
      `${this.apiUrl}/${id}/albums/`
    );
  }

  /**
   * Retorna el estado de la transacción al agregar un artista como favorito
   * @author Héctor Arias
   * @param idColeccionista El `id` del coleccionista que se quiere añadir el artista favorito.
   * @param idArtista El `id` del artista que se quiere añadir como favorito.
   * @returns Un objeto `Observable` con el detalle de los datos del coleccionista.
   */
  addArtistaFavorito(
    idColeccionista: number,
    idArtista: number
  ): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + '/' + idColeccionista + '/musicians/' + idArtista,
      null
    );
  }

  addAlbum(
    idColeccionista: number,
    collectorAlbum: ColeccionistaAlbum
  ): Observable<ColeccionistaAlbum> {
    return this.http.post<ColeccionistaAlbum>(
      this.apiUrl + '/' + idColeccionista + '/albums/' + collectorAlbum.id,
      collectorAlbum
    );
  }
}
