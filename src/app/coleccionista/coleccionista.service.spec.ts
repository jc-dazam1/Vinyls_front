import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ColeccionistaService } from './coleccionista.service';
import faker from 'faker';
import { Coleccionista } from './coleccionista';
import { ColeccionistaAlbum } from './coleccionistaAlbum';
import { AlbumStatus } from './albumStatus.enum';
import { Artista } from '../artista/artista';

describe('Service: Coleccionista', () => {
  let injector: TestBed;
  let service: ColeccionistaService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + 'collectors';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColeccionistaService],
    });
    injector = getTestBed();
    service = injector.get(ColeccionistaService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /**
   * Prueba de unidad para verificar que la invocación al servicio de coleccionistas es exitoso.
   * @author Juan Feliciano
   */
  it('getColeccionistas() debe retornar 10 registros', () => {
    let mockColeccionistas: Coleccionista[] = [];

    for (let i = 1; i < 11; i++) {
      let coleccionista = new Coleccionista(
        i,
        faker.name.findName(),
        faker.phone.phoneNumber(),
        faker.internet.email(),
        null,
        null,
        null
      );

      mockColeccionistas.push(coleccionista);
    }

    service.getColeccionistas().subscribe((coleccionistas) => {
      expect(coleccionistas.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockColeccionistas);
  });
  /**
   * Prueba de unidad para verificar que la invocación al servicio que retorna los datos detallados de un coleccionistas es exitoso.
   * @author Juan Feliciano
   */
  it('getDetalleColeccionista() debe retornar el detalle de un coleccionista', () => {
    let mockColeccionista = new Coleccionista(
      faker.random.number(),
      faker.name.findName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      null,
      null,
      null
    );

    service
      .getDetalleColeccionista(mockColeccionista.id)
      .subscribe((coleccionista) => {
        expect(coleccionista).toBeInstanceOf(Coleccionista);
        expect(coleccionista).toBeDefined();
      });

    const req = httpMock.expectOne(`${apiUrl}/${mockColeccionista.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockColeccionista);
  });

  /**
   * Prueba de unidad para verificar que la invocación al servicio que retorna los álbums de un coleccionista es exitoso.
   * @author Juan Feliciano
   */
  it('getAlbums() debe retornar 5 registros', () => {
    let mockAlbumsColeccionista = new Array<ColeccionistaAlbum>();

    for (let i = 1; i <= 5; i++) {
      let coleccionistaAlbum = new ColeccionistaAlbum(
        i,
        faker.random.number(),
        AlbumStatus.ACTIVE,
        null
      );

      mockAlbumsColeccionista.push(coleccionistaAlbum);
    }

    const id = faker.random.number();
    service.getAlbums(id).subscribe((collectorAlbum) => {
      expect(collectorAlbum.length).toBe(5);
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}/albums/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAlbumsColeccionista);
  });

  /**
   * Prueba de unidad para verificar la adición de un álbum a un coleccionista.
   * @author Juan Feliciano
   */
  it('addAlbum() test unitario para validar servicio para adicionar un álbum a un coleccionista.', () => {
    let mockColeccionistaAlbum = new ColeccionistaAlbum(
      faker.random.number(),
      faker.random.number(),
      AlbumStatus.ACTIVE,
      null
    );

    const id = faker.random.number();
    service.addAlbum(id, mockColeccionistaAlbum).subscribe((response) => {
      expect(response.id).toEqual(mockColeccionistaAlbum.id);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/${id}/albums/${mockColeccionistaAlbum.id}`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(mockColeccionistaAlbum);
  });

  /**
   * Prueba de unidad para verificar la adición de un álbum a un coleccionista.
   * @author Juan Feliciano
   */
  it('addArtistaFavorito() test unitario para validar servicio que permite adicionar artista favorito a un coleccionista.', () => {
    let mockArtista = new Artista(
      faker.random.number(),
      faker.name.findName(),
      faker.internet.url(),
      faker.lorem.word(),
      faker.date.past(),
      null,
      null
    );
    const idColeccionista = faker.random.number();
    service
      .addArtistaFavorito(idColeccionista, mockArtista.id)
      .subscribe((response) => {
        expect(response.id).toEqual(mockArtista.id);
      });

    const req = httpMock.expectOne(
      `${apiUrl}/${idColeccionista}/musicians/${mockArtista.id}`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(mockArtista);
  });
});
