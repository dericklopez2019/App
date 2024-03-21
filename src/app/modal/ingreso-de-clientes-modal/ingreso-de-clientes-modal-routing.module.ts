import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoDeClientesModalPage } from './ingreso-de-clientes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoDeClientesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoDeClientesModalPageRoutingModule {}
