import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-de-productos-modal',
  templateUrl: './ingreso-de-productos-modal.page.html',
  styleUrls: ['./ingreso-de-productos-modal.page.scss'],
})
export class IngresoDeProductosModalPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
}
