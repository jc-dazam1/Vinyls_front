import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Album } from 'src/app/album/album';
import { ArtistaDetailComponent } from './artista-detail.component';
import faker from "faker";
import { Artista } from '../artista';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PremioInterprete } from '../premioInterprete';
import { ArtistaService } from '../artista.service';
import { of } from 'rxjs';

describe('ArtistaDetailComponent', () => {
  let component: ArtistaDetailComponent;
  let fixture: ComponentFixture<ArtistaDetailComponent>;
  let debug: DebugElement;
  let service: ArtistaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaDetailComponent ],
      imports: [HttpClientTestingModule,RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaDetailComponent);
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

    component.detalleArtista =
      new Artista(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.date.past(),
        null, [
          {id: faker.random.number(),premiationDate: faker.date.past()}
        ]
      ),

    fixture.detectChanges();


    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h2 element ", () => {
    expect(debug.query(By.css("h2")).nativeElement.innerText).toContain(
     "Albums"
    );
  });

  // Spec
it('Should return SomeModel[]', () => {
  const items = component.detalleArtista =
  new Artista(
    faker.random.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.date.past(),
    null, [
      {id: faker.random.number(),premiationDate: faker.date.past()}
    ]
  )

  item => {
    expect(item instanceof PremioInterprete).toBe(true, 'instance of SomeModel');
  };
});

});
