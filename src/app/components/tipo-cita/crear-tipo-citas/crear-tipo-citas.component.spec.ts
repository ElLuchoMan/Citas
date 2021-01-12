import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoCitasComponent } from './crear-tipo-citas.component';

describe('CrearTipoCitasComponent', () => {
  let component: CrearTipoCitasComponent;
  let fixture: ComponentFixture<CrearTipoCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipoCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
