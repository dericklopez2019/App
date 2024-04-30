import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';
import { ICellRendererParams } from "ag-grid-community";

import { IngresoDeProductosModalPage } from 'src/app/modal/ingreso-de-productos-modal/ingreso-de-productos-modal.page';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  gridOptions: GridOptions;

  themeClass = "ag-theme-quartz";
  filteredRowData: any[] = [];
  searchTerm: string = '';
  pageSize = 10;
  pageSizes = [10, 25, 50];

  rowData = [
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito: 3.10, precioplansalud: 3.30, preciomayorista: 3.40, preciopublico: 3.60 },
    { id: "2", nombre: "Paracetamol", costototal: 3.0, preciocredito: 3.50, precioplansalud: 3.70, preciomayorista: 3.80, preciopublico: 4.00 },
    { id: "3", nombre: "Ibuprofeno", costototal: 2.8, preciocredito: 3.20, precioplansalud: 3.40, preciomayorista: 3.50, preciopublico: 3.70 },
    { id: "4", nombre: "Omeprazol", costototal: 4.0, preciocredito: 4.50, precioplansalud: 4.70, preciomayorista: 4.80, preciopublico: 5.00 },
    { id: "5", nombre: "Diclofenaco", costototal: 3.2, preciocredito: 3.60, precioplansalud: 3.80, preciomayorista: 3.90, preciopublico: 4.10 },
    { id: "6", nombre: "Atorvastatina", costototal: 5.5, preciocredito: 6.00, precioplansalud: 6.20, preciomayorista: 6.30, preciopublico: 6.50 },
    { id: "7", nombre: "Amoxicilina", costototal: 4.8, preciocredito: 5.20, precioplansalud: 5.40, preciomayorista: 5.50, preciopublico: 5.70 },
    { id: "8", nombre: "Salbutamol", costototal: 3.7, preciocredito: 4.00, precioplansalud: 4.20, preciomayorista: 4.30, preciopublico: 4.50 },
    { id: "9", nombre: "Loratadina", costototal: 2.3, preciocredito: 2.80, precioplansalud: 3.00, preciomayorista: 3.10, preciopublico: 3.30 },
    { id: "10", nombre: "Ciprofloxacino", costototal: 6.2, preciocredito: 6.70, precioplansalud: 6.90, preciomayorista: 7.00, preciopublico: 7.20 },
    { id: "11", nombre: "Metformina", costototal: 3.5, preciocredito: 3.90, precioplansalud: 4.10, preciomayorista: 4.20, preciopublico: 4.40 },
    { id: "12", nombre: "Dexametasona", costototal: 4.1, preciocredito: 4.60, precioplansalud: 4.80, preciomayorista: 4.90, preciopublico: 5.10 },
    { id: "13", nombre: "Eritromicina", costototal: 3.9, preciocredito: 4.30, precioplansalud: 4.50, preciomayorista: 4.60, preciopublico: 4.80 },
    { id: "14", nombre: "Furosemida", costototal: 2.7, preciocredito: 3.00, precioplansalud: 3.20, preciomayorista: 3.30, preciopublico: 3.50 },
    { id: "15", nombre: "Losartán", costototal: 5.0, preciocredito: 5.50, precioplansalud: 5.70, preciomayorista: 5.80, preciopublico: 6.00 },
    { id: "16", nombre: "Clonazepam", costototal: 3.3, preciocredito: 3.70, precioplansalud: 3.90, preciomayorista: 4.00, preciopublico: 4.20 },
    { id: "17", nombre: "Sertralina", costototal: 4.5, preciocredito: 5.00, precioplansalud: 5.20, preciomayorista: 5.30, preciopublico: 5.50 },
    { id: "18", nombre: "Tramadol", costototal: 4.8, preciocredito: 5.30, precioplansalud: 5.50, preciomayorista: 5.60, preciopublico: 5.80 },
    { id: "19", nombre: "Metronidazol", costototal: 3.2, preciocredito: 3.60, precioplansalud: 3.80, preciomayorista: 3.90, preciopublico: 4.10 },
    { id: "20", nombre: "Tadalafil", costototal: 6.7, preciocredito: 7.20, precioplansalud: 7.40, preciomayorista: 7.50, preciopublico: 7.70 },
  ];

  colDefs: ColDef[] = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "nombre",headerName: "Nombre", },
    { field: "costototal",headerName: "Costo Total", width: 110 },
    { field: "preciocredito", headerName: "Precio Credito",width: 125 },
    { field: "precioplansalud",headerName: "Precio Plan Salud", width: 150 },
    { field: "preciomayorista",headerName: "Precio Mayorista", width: 140 },
    { field: "preciopublico",headerName: "Precio Publico", width: 125 },
    {
      headerName: 'Acciones',
      cellRenderer: this.accionesRenderer,width: 200
    }
  ];

  constructor( private modalCtrl: ModalController) {
    this.filteredRowData = this.rowData;
    this.gridOptions = {
      domLayout: 'autoHeight',
    };
   }

  ngOnInit() {
  }

  onSearch(event: any) {

    const searchTerm = event.target.value.toLowerCase();

    this.filteredRowData = this.rowData.filter(item => {
      return item.id.toString().includes(searchTerm) ||
             item.nombre.toLowerCase().includes(searchTerm) ||
             item.costototal.toString().includes(searchTerm) ||
             item.preciocredito.toString().includes(searchTerm) ||
             item.precioplansalud.toString().includes(searchTerm) ||
             item.preciomayorista.toString().includes(searchTerm) ||
             item.preciopublico.toString().includes(searchTerm);
    });
  }

    editarProducto(id: string) {
      console.log('Click en editar', id)
    }

    eliminarProducto(id: string) {

    }
    accionesRenderer(params: any) {
      const div = document.createElement('div');
      div.innerHTML = `
        <ion-button size="small" color="primary" (click)="editarProducto('${params.data.id}')">Editar</ion-button>
        <ion-button size="small" color="danger" (click)="editarProducto('${params.data.id}')">Eliminar</ion-button>
      `;
      return div;
    }

    async mostrarModalProductos(){
      const modal = await this.modalCtrl.create({
        component:IngresoDeProductosModalPage
      });
      modal.present();

    }

}

