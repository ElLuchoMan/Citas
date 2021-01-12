import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitasComponent } from './crear-citas.component';

describe('CrearCitasComponent', () => {
  let component: CrearCitasComponent;
  let fixture: ComponentFixture<CrearCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
