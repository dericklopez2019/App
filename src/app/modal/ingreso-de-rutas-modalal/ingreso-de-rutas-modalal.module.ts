import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeRutasModalalPageRoutingModule } from './ingreso-de-rutas-modalal-routing.module';

import { IngresoDeRutasModalalPage } from './ingreso-de-rutas-modalal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeRutasModalalPageRoutingModule
  ],
  declarations: [IngresoDeRutasModalalPage]
})
export class IngresoDeRutasModalalPageModule {}
