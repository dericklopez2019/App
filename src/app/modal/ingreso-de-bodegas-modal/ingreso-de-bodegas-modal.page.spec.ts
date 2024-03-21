import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeBodegasModalPage } from './ingreso-de-bodegas-modal.page';

describe('IngresoDeBodegasModalPage', () => {
  let component: IngresoDeBodegasModalPage;
  let fixture: ComponentFixture<IngresoDeBodegasModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeBodegasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
