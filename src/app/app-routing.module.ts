import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-de-productos-modal',
    loadChildren: () => import('./modal/ingreso-de-productos-modal/ingreso-de-productos-modal.module').then( m => m.IngresoDeProductosModalPageModule)
  },
  {
    path: 'ingreso-de-bodegas-modal',
    loadChildren: () => import('./modal/ingreso-de-bodegas-modal/ingreso-de-bodegas-modal.module').then( m => m.IngresoDeBodegasModalPageModule)
  },
  {
    path: 'ingreso-de-rutas-modalal',
    loadChildren: () => import('./modal/ingreso-de-rutas-modalal/ingreso-de-rutas-modalal.module').then( m => m.IngresoDeRutasModalalPageModule)
  },
  {
    path: 'ingreso-de-categorias-modalal',
    loadChildren: () => import('./modal/ingreso-de-categorias-modalal/ingreso-de-categorias-modalal.module').then( m => m.IngresoDeCategoriasModalalPageModule)
  },
  {
    path: 'ingreso-de-clientes-modal',
    loadChildren: () => import('./modal/ingreso-de-clientes-modal/ingreso-de-clientes-modal.module').then( m => m.IngresoDeClientesModalPageModule)
  },  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
