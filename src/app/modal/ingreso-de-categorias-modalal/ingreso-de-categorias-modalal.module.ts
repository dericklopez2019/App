import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDeCategoriasModalalPageRoutingModule } from './ingreso-de-categorias-modalal-routing.module';

import { IngresoDeCategoriasModalalPage } from './ingreso-de-categorias-modalal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDeCategoriasModalalPageRoutingModule
  ],
  declarations: [IngresoDeCategoriasModalalPage]
})
export class IngresoDeCategoriasModalalPageModule {}
