/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { AlbumService } from './album.service';
import { Track } from './track';
import faker from "faker";
import { Album } from './album';
import { Comments } from './comment';
import { combineAll } from 'rxjs/operators';


describe('Service: Album', () => {
  let service: AlbumService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "albums";
  let apiUrlComments =  environment.baseUrl + "/albums/103/comments";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });
    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getPost() should return 1 records", () => {
    let mockPosts: Album[] = [];

    for (let i = 1; i < 11; i++) {
      let track = new Album(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null,
        null
      );

      mockPosts.push(track);
    }

    service.getAlbums().subscribe((track) => {
      expect(track.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });

});

describe('AlbumService', () => {
  let service: AlbumService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "albums" + '/' + 100 + '/tracks';
  let apiUrlComments = environment.baseUrl + "albums/" + 103 + "/comments";
  let apiUrlAlbums = environment.baseUrl + 'albums';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });
    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getPost() should return 1 records", () => {
    let mockPosts: Track[] = [];

    for (let i = 1; i < 11; i++) {
      let track = new Track(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );

      mockPosts.push(track);
    }

    service.getTracks(100).subscribe((track) => {
      expect(track.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });

  it("getPost() should return 1 records", () => {
    let mockPosts: Comments[] = [];

    for (let i = 1; i < 11; i++) {
      let comment = new Comments(
        i,
        faker.lorem.sentence(),
        faker.random.number()
      );

      mockPosts.push(comment);
    }

    service.getTracks(100).subscribe((comment) => {
      expect(comment.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });

  it('Test Add Prize', () => {
    const Comments = {
      description: 'asef',
      rating: 'ksfv',
      collector: {"id":103}
    };

    service.createComment(Comments, 103).subscribe(t => {
      expect('').toBe('');
    });

    const req = httpMock.expectOne(apiUrlComments);
    expect(req.request.method).toEqual('POST');
    req.flush('');
  });

  it('Test create Album', () => {
    const Album = {
      description: 'asef',
      rating: 'ksfv',
      collector: {"id":103}
    };

    service.createAlbum(Album).subscribe(t => {
      expect('').toBe('');
    });

    const req = httpMock.expectOne(apiUrlAlbums);
    expect(req.request.method).toEqual('POST');
    req.flush('');
  });


  it('Test create track', () => {
    const Track = {
      description: 'asef',
      rating: 'ksfv',
      collector: {"id":103}
    };

    service.createTrack(101, Track).subscribe(t => {
      expect('').toBe('');
    });

    const req = httpMock.expectOne(apiUrlAlbums + '/' + 101 + '/tracks');
    expect(req.request.method).toEqual('POST');
    req.flush('');
  });

});

