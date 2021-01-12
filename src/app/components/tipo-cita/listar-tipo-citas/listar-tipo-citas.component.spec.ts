import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCitasComponent } from './listar-tipo-citas.component';

describe('ListarTipoCitasComponent', () => {
  let component: ListarTipoCitasComponent;
  let fixture: ComponentFixture<ListarTipoCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
