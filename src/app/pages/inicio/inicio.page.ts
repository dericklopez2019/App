import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {  MenuItem } from 'src/app/interfaces/interfaces';

import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menuItems: Observable<MenuItem[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getMenuOpts();
  }
  mostrarMenu() {
    this.menuCtrl.open('first');
  }
}
