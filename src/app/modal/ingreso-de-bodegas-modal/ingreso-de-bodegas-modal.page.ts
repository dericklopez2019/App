import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-de-bodegas-modal',
  templateUrl: './ingreso-de-bodegas-modal.page.html',
  styleUrls: ['./ingreso-de-bodegas-modal.page.scss'],
})
export class IngresoDeBodegasModalPage implements OnInit {

  constructor( private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.router.navigate(['/inicio']);
  }
}
