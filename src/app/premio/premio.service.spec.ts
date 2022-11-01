/* tslint:disable:no-unused-variable */

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { Premio } from '../artista/premio';
import { PremioService } from './premio.service';
import faker from 'faker';
import { environment } from 'src/environments/environment';

describe('Service: Premio', () => {
  let injector: TestBed;
  let service: PremioService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + 'prizes';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PremioService],
    });
    injector = getTestBed();
    service = injector.get(PremioService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /**
   * Prueba de unidad para verificar que la invocación al servicio de premios es exitoso.
   * @author Juan Feliciano
   */
  it('getPrizes() debe retornar 10 premios', () => {
    let mockPremios: Array<Premio> = new Array();

    for (let i = 1; i < 11; i++) {
      let premio = new Premio(
        i,
        faker.name.findName(),
        faker.name.findName(),
        faker.lorem.words(),
        faker.date.recent(),
        null
      );

      mockPremios.push(premio);
    }

    service.getPrizes().subscribe((prizes) => {
      expect(prizes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPremios);
  });

  /**
   * Prueba de unidad para verificar la creación de un premio.
   * @author Juan Feliciano
   */
  it('create() test unitario para validar servicio que permite crear un premio.', () => {
    let mockPremio = new Premio(
      faker.random.number(),
      faker.name.findName(),
      faker.name.findName(),
      faker.lorem.words(),
      faker.date.recent(),
      null
    );

    const id = faker.random.number();
    service.create(mockPremio).subscribe((response) => {
      expect(response.id).toEqual(mockPremio.id);
    });

    const req = httpMock.expectOne(`${apiUrl}`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockPremio);
  });
});
