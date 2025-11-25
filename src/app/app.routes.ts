import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './actividad1/registro.component';
import {ProductosComponent} from './actividad2/productos.component';
import {FacturaComponent} from './actividad3/factura.component';
import {PerfilUsuarioComponent} from './actividad5/perfil-usuario.component';
import {RegistroAvanzadoComponent} from './actividad4/registro-avanzado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'actividad1', pathMatch: 'full' },
  { path: 'actividad1', component: RegistroComponent },
  { path: 'actividad2', component: ProductosComponent },
  { path: 'actividad3', component: FacturaComponent },
  { path: 'actividad4', component: RegistroAvanzadoComponent },
  { path: 'actividad5', component: PerfilUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
