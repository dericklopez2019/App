import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeProductosModalPage } from './ingreso-de-productos-modal.page';

describe('IngresoDeProductosModalPage', () => {
  let component: IngresoDeProductosModalPage;
  let fixture: ComponentFixture<IngresoDeProductosModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeProductosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
