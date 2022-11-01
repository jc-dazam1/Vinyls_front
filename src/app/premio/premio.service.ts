import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Premio } from '../artista/premio';

@Injectable({
  providedIn: 'root',
})
export class PremioService {
  private apiUrl = environment.baseUrl + 'prizes';
  constructor(private http: HttpClient) {}

  /**
   * Retorna el listado de todos los premios registrados en el sistema.
   * @author Juan Feliciano
   * @return Un objeto `Observable` con el listado de premios registrados en el sistema.
   */
  getPrizes(): Observable<Array<Premio>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<Premio>>(this.apiUrl);
  }

  /**
   * Crea un premio haciendo uso del servicio en el backend.
   * @param prize Objeto `Premio` con los datos del premio que se va a crear.
   * @returns Un objeto `Observable` el id del premio creado.
   */
  create(prize: Premio): Observable<Premio> {
    return this.http.post<Premio>(this.apiUrl, prize);
  }
}
