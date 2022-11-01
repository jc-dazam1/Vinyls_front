import { SinFotoAlbumPipe } from './sin-foto-album.pipe';

describe('SinFotoAlbumPipe', () => {
  let pipe: SinFotoAlbumPipe;
  it('create an instance', () => {
    const pipe = new SinFotoAlbumPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    pipe = new SinFotoAlbumPipe();
  });

  it('providing no value returns fallback', () => {
    pipe = new SinFotoAlbumPipe();
    expect(pipe.transform('')).toBe('assets/imagenes/sinFotoAlbum.png');
  });

  it('providing no value returns null', () => {
    pipe = new SinFotoAlbumPipe();
    expect(pipe.transform(null)).toBe('assets/imagenes/sinFotoAlbum.png');
  });

  it('providing no value returns null', () => {
    pipe = new SinFotoAlbumPipe();
    expect(pipe.transform('assets/imagenes/sinFotoAlbum.png')).toEqual('assets/imagenes/sinFotoAlbum.png');
  });



});
