import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeClientesModalPageRoutingModule } from './ingreso-de-clientes-modal-routing.module';

import { IngresoDeClientesModalPage } from './ingreso-de-clientes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeClientesModalPageRoutingModule
  ],
  declarations: [IngresoDeClientesModalPage]
})
export class IngresoDeClientesModalPageModule {}
