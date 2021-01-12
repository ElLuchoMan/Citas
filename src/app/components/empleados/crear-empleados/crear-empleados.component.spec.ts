import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmpleadosComponent } from './crear-empleados.component';

describe('CrearEmpleadosComponent', () => {
  let component: CrearEmpleadosComponent;
  let fixture: ComponentFixture<CrearEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
