import { SinFotoArtistaPipe } from './sin-foto-artista.pipe';

describe('SinFotoArtistaPipe', () => {
  let pipe: SinFotoArtistaPipe;
  it('create an instance', () => {
    const pipe = new SinFotoArtistaPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    pipe = new SinFotoArtistaPipe();
  });

  it('providing no value returns fallback', () => {
    pipe = new SinFotoArtistaPipe();
    expect(pipe.transform('')).toBe('assets/imagenes/sinFotoArtista.png');
  });

  it('providing no value returns null', () => {
    pipe = new SinFotoArtistaPipe();
    expect(pipe.transform(null)).toBe('assets/imagenes/sinFotoArtista.png');
  });

  it('providing no value returns null', () => {
    pipe = new SinFotoArtistaPipe();
    expect(pipe.transform('assets/imagenes/sinFotoArtista.png')).toEqual('assets/imagenes/sinFotoArtista.png');
  });



});
