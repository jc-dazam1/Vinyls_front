/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { Album } from 'src/app/album/album';
import { ColeccionistaAgregarAlbumComponent } from './coleccionista-agregar-album.component';
import faker from 'faker';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ColeccionistaAgregarAlbumComponent', () => {
  let component: ColeccionistaAgregarAlbumComponent;
  let fixture: ComponentFixture<ColeccionistaAgregarAlbumComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionistaAgregarAlbumComponent],
      imports: [NgbModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [NgbActiveModal, NgbModal, FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionistaAgregarAlbumComponent);
    component = fixture.componentInstance;
    for (let i = 1; i <= 5; i++) {
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
      component.albumList.push(album);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener una lista desplegable con álbumes', () => {
    expect(component.albumList.length).toBeGreaterThan(0);
    let select: HTMLSelectElement = debug.query(By.css('#album')).nativeElement;
    //Se resta uno a la longitud ya que en el HTML se agrega una opción vacía
    expect(select.length - 1).toBe(component.albumList.length);
  });
});
