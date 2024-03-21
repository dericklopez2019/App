import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoDeCategoriasModalalPage } from './ingreso-de-categorias-modalal.page';

describe('IngresoDeCategoriasModalalPage', () => {
  let component: IngresoDeCategoriasModalalPage;
  let fixture: ComponentFixture<IngresoDeCategoriasModalalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoDeCategoriasModalalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
