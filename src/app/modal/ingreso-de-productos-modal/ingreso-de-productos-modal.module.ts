import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeProductosModalPageRoutingModule } from './ingreso-de-productos-modal-routing.module';

import { IngresoDeProductosModalPage } from './ingreso-de-productos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeProductosModalPageRoutingModule
  ],
  declarations: [IngresoDeProductosModalPage]
})
export class IngresoDeProductosModalPageModule {}
