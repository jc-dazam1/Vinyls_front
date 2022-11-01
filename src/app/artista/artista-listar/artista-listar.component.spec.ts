import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ArtistaListarComponent } from './artista-listar.component';
import faker from "faker";
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from "@angular/platform-browser";
import { Artista } from '../artista';
import { FiltroBusquedaPipe } from '../pipes/filtro-busqueda.pipe';
import { SinFotoArtistaPipe } from '../pipes/sin-foto-artista.pipe';
import { Album } from 'src/app/album/album';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PremioInterprete } from '../premioInterprete';
import { ArtistaService } from '../artista.service';
import { equal } from 'assert';
import { ColeccionistaService } from 'src/app/coleccionista/coleccionista.service';
import { of } from 'rxjs';

describe('ArtistaListarComponent', () => {
  let component: ArtistaListarComponent;
  let fixture: ComponentFixture<ArtistaListarComponent>;
  let debug: DebugElement;
  let router: Router;
  let fixture1;
  let service: ArtistaService
  let serviceC: ColeccionistaService
  let spy: any;

  const mockActivatedRoute = {    
   snapshot: {    
   params: {    
   id: 'aMockId'    
   }    
   }    
  };    

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistaListarComponent, FiltroBusquedaPipe, SinFotoArtistaPipe],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule],
      providers: [{provide: ActivatedRoute, useValue: mockRouter} ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaListarComponent);
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

    component.artistas = [
      new Artista(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ),
    ];

    let premioArtista = new PremioInterprete(
      faker.random.number(),
      faker.date.past()
    )

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h2 element ", () => {
    expect(debug.query(By.css("h2")).nativeElement.innerText).toContain(
      component.artistas[0].name
    );
  });

  it('should go home', async(inject([Router], (router) => {
    spyOn(router, 'navigate'); //added a spy on router
    let fixture = TestBed.createComponent(ArtistaListarComponent);
    let component = TestBed.createComponent(ArtistaListarComponent).componentInstance;
    component.verbtnAnnadir = false;
    component.irDetalleArtista(10);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['artistas/',10]);

  })));


  it("should call list artist", async(() => {
    const response : Array<Artista> = [];
    fixture = TestBed.createComponent(ArtistaListarComponent);
    service = TestBed.inject(ArtistaService);
    spyOn(service, 'getArtistas').and.returnValue(of(response));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it("should annadir artist", async(() => {
    const response : Array<Artista> = [];
    component.annadirArtista(10);
  }));

});
