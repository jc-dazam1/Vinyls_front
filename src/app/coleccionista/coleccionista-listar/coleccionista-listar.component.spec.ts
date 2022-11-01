/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import faker from 'faker';
import { ColeccionistaListarComponent } from './coleccionista-listar.component';
import { FiltroColeccionistasPipe } from '../filtro-coleccionistas.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Coleccionista } from '../coleccionista';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { ColeccionistaService } from '../coleccionista.service';
import { of } from 'rxjs';

describe('ColeccionistaListarComponent', () => {
  let component: ColeccionistaListarComponent;
  let fixture: ComponentFixture<ColeccionistaListarComponent>;
  let debug: DebugElement;
  let service: ColeccionistaService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionistaListarComponent, FiltroColeccionistasPipe],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionistaListarComponent);
    component = fixture.componentInstance;
    component.coleccionistas = [
      new Coleccionista(
        faker.random.number(),
        faker.name.findName(),
        faker.phone.phoneNumber(),
        faker.internet.email(),
        null,
        null,
        null
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crear.', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Prueba de integración verificar que un coleccionista se carga de forma correcta en la vista.
   * @author Juan Feliciano
   */
  it('Debe tener un elemento h2.', () => {
    expect(debug.query(By.css('h2')).nativeElement.innerText).toContain(
      component.coleccionistas[0].name
    );
  });

  it("should call list artist", async(() => {
    const response : Array<Coleccionista> = [];
    fixture = TestBed.createComponent(ColeccionistaListarComponent);
    service = TestBed.inject(ColeccionistaService);
    spyOn(service, 'getColeccionistas').and.returnValue(of(response));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go home', async(inject([Router], (router) => {
    spyOn(router, 'navigate'); //added a spy on router
    let fixture = TestBed.createComponent(ColeccionistaListarComponent);
    let component = TestBed.createComponent(ColeccionistaListarComponent).componentInstance;
    component.verDetalleColeccionista(10);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/coleccionistas',10]);

  })));
});
