import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeRutasModalalPage } from './ingreso-de-rutas-modalal.page';

describe('IngresoDeRutasModalalPage', () => {
  let component: IngresoDeRutasModalalPage;
  let fixture: ComponentFixture<IngresoDeRutasModalalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeRutasModalalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
