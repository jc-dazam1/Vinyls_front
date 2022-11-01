import { Album } from '../album';
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
    let album = new Album(faker.random.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.date.past(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    null, null);


    let album1 = new Album(faker.random.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.date.past(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    null, null);

    expect(pipe.applyFilter(album, album)).toEqual(true);
    expect(pipe.applyFilter(album, album1)).toEqual(false);
  });

});
