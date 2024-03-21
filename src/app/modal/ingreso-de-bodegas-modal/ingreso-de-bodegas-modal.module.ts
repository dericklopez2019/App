import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeBodegasModalPageRoutingModule } from './ingreso-de-bodegas-modal-routing.module';

import { IngresoDeBodegasModalPage } from './ingreso-de-bodegas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeBodegasModalPageRoutingModule
  ],
  declarations: [IngresoDeBodegasModalPage]
})
export class IngresoDeBodegasModalPageModule {}
