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

  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
}
