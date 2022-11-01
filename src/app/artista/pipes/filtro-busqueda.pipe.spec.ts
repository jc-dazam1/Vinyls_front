import { Artista } from '../artista';
import { FiltroBusquedaPipe } from './filtro-busqueda.pipe';
import faker from "faker";

describe('filtroBusqueda', () => {
  it('create an instance', () => {
    const pipe = new FiltroBusquedaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Verificar el retorno vacio, cuando no encuentra un elemento', () => {
    const pipe = new FiltroBusquedaPipe();
    expect(pipe.transform([], null)).toEqual([]);
  });

  it('Validar metodo de filtrado', () => {
    const pipe = new FiltroBusquedaPipe();
    expect(pipe.applyFilter(null, null)).toEqual(true);
  });

  it('Validar metodo de filtrado', () => {
    const pipe = new FiltroBusquedaPipe();
    let artista = new Artista(faker.random.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.date.past(),
    null, [
      {id: faker.random.number(),premiationDate: faker.date.past()}
    ])

    let artista1 = new Artista(faker.random.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.date.past(),
    null, [
      {id: faker.random.number(),premiationDate: faker.date.past()}
    ])

    expect(pipe.applyFilter(artista, artista)).toEqual(true);
    expect(pipe.applyFilter(artista, artista1)).toEqual(false);
  });

});
