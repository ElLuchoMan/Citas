import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuariosComponent } from './crear-usuarios.component';

describe('CrearUsuariosComponent', () => {
  let component: CrearUsuariosComponent;
  let fixture: ComponentFixture<CrearUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
