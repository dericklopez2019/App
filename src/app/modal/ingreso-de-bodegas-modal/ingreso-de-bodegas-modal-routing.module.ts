import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoDeBodegasModalPage } from './ingreso-de-bodegas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoDeBodegasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoDeBodegasModalPageRoutingModule {}
