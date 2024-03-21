import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-de-rutas-modalal',
  templateUrl: './ingreso-de-rutas-modalal.page.html',
  styleUrls: ['./ingreso-de-rutas-modalal.page.scss'],
})
export class IngresoDeRutasModalalPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
}
