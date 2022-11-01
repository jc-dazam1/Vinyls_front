/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FiltroPremioPipe } from './filtro-premio.pipe';
import faker from "faker";
import { Premio } from '../artista/premio';

describe('Pipe: FiltroPremioe', () => {
  it('create an instance', () => {
    let pipe = new FiltroPremioPipe();
    expect(pipe).toBeTruthy();
  });

  it('Verificar el retorno vacio, cuando no encuentra un elemento', () => {
    const pipe = new FiltroPremioPipe();
    expect(pipe.transform([], null)).toEqual([]);
  });

  it('Validar metodo de filtrado', () => {
    const pipe = new FiltroPremioPipe();

    let premio = new Premio(faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null,
      null
    )

    let premio1 = new Premio(faker.random.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    null,
    null
  )

    expect(pipe.applyFilter(null, null)).toEqual(true);
    expect(pipe.applyFilter(premio, premio1)).toEqual(false);
  });

});
