import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-de-categorias-modalal',
  templateUrl: './ingreso-de-categorias-modalal.page.html',
  styleUrls: ['./ingreso-de-categorias-modalal.page.scss'],
})
export class IngresoDeCategoriasModalalPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

    inputs: { text: string }[] = [{ text: '' }];
  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
  agregarInput(index: number) {
    this.inputs.splice(index + 1, 0, { text: '' }); // Agrega un nuevo elemento en el índice siguiente
  }
  ionViewDidEnter() {

    if (this.inputs.length > 1) {
      this.inputs = [{ text: '' }];
    }
  }
}
