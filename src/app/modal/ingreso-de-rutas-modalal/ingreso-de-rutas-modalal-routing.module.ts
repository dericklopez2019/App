import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoDeRutasModalalPage } from './ingreso-de-rutas-modalal.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoDeRutasModalalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoDeRutasModalalPageRoutingModule {}
