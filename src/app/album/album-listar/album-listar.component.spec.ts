/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AlbumListarComponent } from './album-listar.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Album } from '../album';
import faker from "faker";
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { FiltroBusquedaPipe } from '../pipes/filtro-busqueda.pipe';
import { SinFotoAlbumPipe } from '../pipes/sin-foto-album.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { of } from 'rxjs';
const ALBUM_OBJECT: Album[] = [new Album(
  1, 'dfd', 'sdfsd', null, 'dsfd', 'dfsd', 'dfds', null, null)];

/**
 * Author: William Sánchez
 * descripcion: Prueba unitaria sobre el componente AlbumListarComponent
 */
describe('AlbumListarComponent', () => {
  let component: AlbumListarComponent;
  let fixture: ComponentFixture<AlbumListarComponent>;
  let debug: DebugElement;
  let albumService: AlbumService;
  let albums: Array<Album>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), FormsModule, ReactiveFormsModule,  ToastrModule.forRoot(),
      BrowserAnimationsModule],
      declarations: [ AlbumListarComponent, FiltroBusquedaPipe, SinFotoAlbumPipe ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListarComponent);
    component = fixture.componentInstance;
    component.albums = [ new Album(faker.random.number(),faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null,
      null),];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h4 element ", () => {
    expect(debug.query(By.css("h2")).nativeElement.innerText).toContain(
      component.albums[0].name
    );

  });


  it('should create', () => {
    fixture = TestBed.createComponent(AlbumListarComponent);
    albumService = TestBed.inject(AlbumService);
    spyOn(albumService, 'getAlbums').and.returnValue(of(ALBUM_OBJECT));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should go home', async(inject([Router], (router) => {
    spyOn(router, 'navigate'); //added a spy on router
    let fixture = TestBed.createComponent(AlbumListarComponent);
    let component = TestBed.createComponent(AlbumListarComponent).componentInstance;
    component.irDetalleAlbum(10);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['albums/',10]);

  })));

  it('should add album', () => {
    component.createAlbum(component.albums[0]);
    expect(component).toBeDefined();
  });

});
