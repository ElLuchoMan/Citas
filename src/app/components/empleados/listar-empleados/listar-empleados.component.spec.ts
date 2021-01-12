import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleadosComponent } from './listar-empleados.component';

describe('ListarEmpleadosComponent', () => {
  let component: ListarEmpleadosComponent;
  let fixture: ComponentFixture<ListarEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
