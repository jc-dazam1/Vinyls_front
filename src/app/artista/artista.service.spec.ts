import { TestBed, getTestBed } from '@angular/core/testing';
import { ArtistaService } from './artista.service';
import { HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import faker from "faker";
import { Artista } from "./artista";
import { environment } from "../../environments/environment";
import { Premio } from './premio';


describe('ArtistaService', () => {
  let service: ArtistaService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "musicians";
  let apiUrlPremios = environment.baseUrl + 'prizes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistaService],
    });
    injector = getTestBed();
    service = injector.get(ArtistaService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getArtistas() retorna 10 registros de artistas", () => {
    let mockPosts: Artista[] = [];

    for (let i = 1; i < 11; i++) {
      let artista = new Artista(
        i,
        faker.lorem.sentence(),
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        null
      );

      mockPosts.push(artista);
    }

    service.getArtistas().subscribe((artistas) => {
      expect(artistas.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });

  it("getDetailArtista() retorna el detalle de un artista", () => {
    let mockPosts: Artista[] = [];

    for (let i = 1; i < 2; i++) {
      let artista = new Artista(
        i,
        faker.lorem.sentence(),
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        null
      );

      mockPosts.push(artista);
    }

    service.getDetailArtista(100).subscribe((artistas) => {
      expect(artistas.id).toEqual(undefined);
    });

    const req = httpMock.expectOne(apiUrl + '/100');
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });


  it("getPremioArtista() retorna el detalle de un premio, dado a un artista", () => {
    let mockPosts: Premio[] = [];

    for (let i = 1; i < 2; i++) {
      let premio = new Premio(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null,
        null
      );

      mockPosts.push(premio);
    }

    service.getPremioArtista(100).subscribe((premio) => {
      expect(premio.id).toEqual(undefined);
    });

    const req = httpMock.expectOne(apiUrlPremios + '/100');
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });

});

