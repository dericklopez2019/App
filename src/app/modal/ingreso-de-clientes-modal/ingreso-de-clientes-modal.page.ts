import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-de-clientes-modal',
  templateUrl: './ingreso-de-clientes-modal.page.html',
  styleUrls: ['./ingreso-de-clientes-modal.page.scss'],
})
export class IngresoDeClientesModalPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
}
