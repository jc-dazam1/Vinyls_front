/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColeccionistaDetailComponent } from './coleccionista-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { Coleccionista } from '../coleccionista';
import faker from 'faker';
import { Comentario } from '../comentario';
import { Album } from 'src/app/album/album';
import { Artista } from 'src/app/artista/artista';
import { ColeccionistaAlbum } from '../coleccionistaAlbum';
import { AlbumStatus } from '../albumStatus.enum';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ColeccionistaDetailComponent', () => {
  let component: ColeccionistaDetailComponent;
  let fixture: ComponentFixture<ColeccionistaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionistaDetailComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
      ToastrModule.forRoot(),
      BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionistaDetailComponent);
    component = fixture.componentInstance;
    let album = new Album(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null,
      null
    );
    let artista = new Artista(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      null
    );
    let comentario = new Comentario(
      faker.random.number(),
      faker.random.alphaNumeric(10),
      faker.random.number(),
      album
    );
    let albumCollector = new ColeccionistaAlbum(
      faker.random.number(),
      faker.random.number(),
      AlbumStatus.ACTIVE
    );
    component.detalleColeccionista = new Coleccionista(
      faker.random.number(),
      faker.name.findName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      [comentario],
      [artista],
      [albumCollector]
    );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crear', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Prueba de integración para verificar que el detalle de un coleccionista se carga de forma correcta en la vista.
   * @author Juan Feliciano
   */
  it('Debe tener un elemento h5.', () => {
    expect(debug.query(By.css('p')).nativeElement.innerText).toContain(
      component.detalleColeccionista.name
    );
  });
});
