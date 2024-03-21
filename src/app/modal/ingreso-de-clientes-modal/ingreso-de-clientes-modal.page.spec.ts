import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeClientesModalPage } from './ingreso-de-clientes-modal.page';

describe('IngresoDeClientesModalPage', () => {
  let component: IngresoDeClientesModalPage;
  let fixture: ComponentFixture<IngresoDeClientesModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeClientesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
