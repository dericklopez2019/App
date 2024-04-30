import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';

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
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
    { id: "1", nombre: "Aspirina", costototal: 2.5, preciocredito:3.10, precioplansalud:3.30, preciomayorista: 3.40, preciopublico: 3.60  },
  ];

  colDefs: ColDef[] = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "nombre",headerName: "Nombre", },
    { field: "costototal",headerName: "Costo Total", width: 110 },
    { field: "preciocredito", headerName: "Precio Credito",width: 125 },
    { field: "precioplansalud",headerName: "Precio Plan Salud", width: 150 },
    { field: "preciomayorista",headerName: "Precio Mayorista", width: 140 },
    { field: "preciopublico",headerName: "Precio Publico", width: 125 },

  ];

  constructor() {
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

    }

    eliminarProducto(id: string) {

    }
    accionesRenderer(params: any) {
      const div = document.createElement('div');
      div.innerHTML = `
        <ion-button size="small" color="primary" (click)="params.onEditar('${params.data.id}')">Editar</ion-button>
        <ion-button size="small" color="danger" (click)="params.onEliminar('${params.data.id}')">Eliminar</ion-button>
      `;
      return div;
    }
}
