import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './album';
import { Comments } from './comment';
import { Track } from './track';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrlAlbums = environment.baseUrl + 'albums';

  constructor(private http: HttpClient) { }

  createAlbum(album): Observable<Album> {
    return this.http.post<Album>(this.apiUrlAlbums, album);
  }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.apiUrlAlbums);
  }

  getDetailAlbum(idAlbum: number): Observable<Album>{
    return this.http.get<Album>(this.apiUrlAlbums + '/' + idAlbum );
  }

  getTracks(idAlbum: number): Observable<Track[]>{
    return this.http.get<Track[]>(this.apiUrlAlbums + '/' + idAlbum + '/tracks');
  }

  createTrack(idAlbum, track): Observable<Track> {
    return this.http.post<Track>(this.apiUrlAlbums + '/' + idAlbum + '/tracks', track);
  }

  createComment(comment, idAlbum: number): Observable<Comments> {
    return this.http.post<Comments>(this.apiUrlAlbums + '/' + idAlbum + '/comments', comment);
  }

}
