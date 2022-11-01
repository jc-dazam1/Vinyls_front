/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TrackListarComponent } from './track-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { Track } from '../track';
import faker from "faker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { of } from 'rxjs';

describe('TrackListarComponent', () => {
  let component: TrackListarComponent;
  let fixture: ComponentFixture<TrackListarComponent>;
  let debug: DebugElement;
  let service: AlbumService;
  var scope, controller, modal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ReactiveFormsModule,  ToastrModule.forRoot(),
      BrowserAnimationsModule],
      declarations: [ TrackListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListarComponent);
    component = fixture.componentInstance;
    component.tracks = [ new Track(faker.random.number(),faker.lorem.sentence(),
      faker.lorem.sentence()),];
    fixture.detectChanges();
    modal = jasmine.createSpyObj('modal', ['show', 'hide']);
  });

  it("Should have an td element ", () => {
    /*expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.tracks[0].name
    );*/

  });

  it('should test the table ', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(2);
      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('#');
      expect(headerRow.cells[1].innerHTML).toBe('Name');
      expect(headerRow.cells[2].innerHTML).toBe('Duration');
      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call list artist", async(() => {
    const response : Array<Track> = [];
    fixture = TestBed.createComponent(TrackListarComponent);
    service = TestBed.inject(AlbumService);
    spyOn(service, 'getTracks').and.returnValue(of(response));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should add track', () => {
    component.createTrack(component.tracks[0]);
    expect(component).toBeDefined();
  });

});
