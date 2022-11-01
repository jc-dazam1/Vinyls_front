/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremioListarComponent } from './premio-listar.component';
import { FiltroPremioPipe } from '../filtro-premio.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { Premio } from 'src/app/artista/premio';
import faker from 'faker';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PremioService } from '../premio.service';
import { of } from 'rxjs';

describe('PremioListarComponent', () => {
  let component: PremioListarComponent;
  let fixture: ComponentFixture<PremioListarComponent>;
  let debug: DebugElement;
  let service: PremioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremioListarComponent, FiltroPremioPipe],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremioListarComponent);
    component = fixture.componentInstance;
    component.prizes = [
      new Premio(
        faker.random.number(),
        faker.name.findName(),
        faker.name.findName(),
        faker.lorem.words(),
        faker.date.recent(),
        null
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crear', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Prueba de integración verificar que los premios se cargan de forma correcta en la vista.
   * @author Juan Feliciano
   */
  it('Debe tener un elemento h2.', () => {
    expect(debug.query(By.css('h2')).nativeElement.innerText).toContain(
      component.prizes[0].name
    );
  });

  it("should call list artist", async(() => {
    const response : Array<Premio> = [];
    fixture = TestBed.createComponent(PremioListarComponent);
    service = TestBed.inject(PremioService);
    spyOn(service, 'getPrizes').and.returnValue(of(response));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});
