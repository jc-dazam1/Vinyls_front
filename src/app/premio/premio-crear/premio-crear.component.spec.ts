/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremioCrearComponent } from './premio-crear.component';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

describe('PremioCrearComponent', () => {
  let component: PremioCrearComponent;
  let fixture: ComponentFixture<PremioCrearComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremioCrearComponent],
      imports: [NgbModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [NgbActiveModal, NgbModal, FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Prueba de integración para verificar que el formulario de creación de premio se integra correctamente con el controlador.
   * @author Juan Feliciano
   */
  it('Debe tener un elemento h4.', () => {
    expect(debug.query(By.css('h4')).nativeElement.innerText).toContain(
      'Create Prize'
    );
  });
});
