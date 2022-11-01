/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from "faker";
import { AlbumDetalleComponent } from './album-detalle.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { Album } from '../album';
import { Performer } from '../performer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumService } from '../album.service';
import { equal } from 'assert';
import { of } from 'rxjs';
declare var $: any;
import * as bootstrap from "bootstrap";
import { Comments } from '../comment';

describe('AlbumDetalleComponent', () => {
  let component: AlbumDetalleComponent;
  let fixture: ComponentFixture<AlbumDetalleComponent>;
  let debug: DebugElement;
  let service: AlbumService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      RouterModule.forRoot([]),
      FormsModule,
      ReactiveFormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule],
      declarations: [ AlbumDetalleComponent ],
    })
    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetalleComponent);
    component = fixture.componentInstance;
    component.detalleAlbum = new Album(faker.random.number(),faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null,
      null);
    component.detalleAlbum.performers = [new Performer(faker.random.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.date.past()),];
    component.detalleAlbum.comments = [new Comments(faker.random.number(), faker.lorem.sentence(),  faker.random.number(), {id: faker.random.number()}),];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h2 element ", () => {
    expect(debug.query(By.css("h2")).nativeElement.textContent).toContain(
      'Tracks'
    );
  });

  it("should call getDetail Album", async(() => {
    const response: Album = null;
    spyOn(service, 'getDetailAlbum').and.returnValue(of(response))
    component.getDetalleAlbum();
    fixture.detectChanges();
    expect(component.detalleAlbum).toEqual(response);
  }));

  // it("should call getDetail Album", async(() => {
  //   const response: Comments = {id: null,description:null,rating:null,collector:{id:null}};
  //   spyOn(service, 'createComment').and.returnValue(of(response))
  //   component.createComentario(response);
  //   fixture.detectChanges();
  //   expect(component.createComentario).toEqual(response);
  // }));

  it('should add comentario', () => {
    component.createComentario(component.detalleAlbum.comments[0]);
    expect(component).toBeDefined();
  });

});
