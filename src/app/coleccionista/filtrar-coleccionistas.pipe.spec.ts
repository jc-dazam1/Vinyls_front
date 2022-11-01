/* tslint:disable:no-unused-variable */

import { Coleccionista } from './coleccionista';
import { FiltroColeccionistasPipe } from './filtro-coleccionistas.pipe';
import faker from "faker";

describe('Pipe: FiltroColeccionistasPipe', () => {
  it('create an instance', () => {
    let pipe = new FiltroColeccionistasPipe();
    expect(pipe).toBeTruthy();
  });

  it('Verificar el retorno vacio, cuando no encuentra un elemento', () => {
    const pipe = new FiltroColeccionistasPipe();
    expect(pipe.transform([], null)).toEqual([]);
  });

  it('Validar metodo de filtrado', () => {
    const pipe = new FiltroColeccionistasPipe();

    let coleccionista = new Coleccionista(faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null,
      null,
      null
    )

    let coleccionista1 = new Coleccionista(faker.random.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    null,
    null,
    null
  )

    expect(pipe.applyFilter(null, null)).toEqual(true);
    expect(pipe.applyFilter(coleccionista, coleccionista1)).toEqual(false);
  });
});
