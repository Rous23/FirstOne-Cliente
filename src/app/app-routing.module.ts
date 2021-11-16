import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraExitosaComponent } from './compra-exitosa/compra-exitosa.component';
import { ConfirmarCompraComponent } from './confirmar-compra/confirmar-compra.component';
import { HomeComponent } from './home/home.component';
import { InformativoComponent } from './informativo/informativo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { OrdenesPendientesComponent } from './ordenes-pendientes/ordenes-pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroExitosoComponent } from './registro-exitoso/registro-exitoso.component';
import { RegistroComponent } from './registro/registro.component';
import { VerificacionRegistroComponent } from './verificacion-registro/verificacion-registro.component';

const routes: Routes = [
  {path: 'informativo', component: InformativoComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'home', component: HomeComponent},
  {path: 'verificacion-registro', component: VerificacionRegistroComponent},
  {path: 'registro-exitoso', component: RegistroExitosoComponent},
  {path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent},
  {path: 'ordenes-pendientes', component: OrdenesPendientesComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'confirmar-compra', component: ConfirmarCompraComponent},
  {path: 'compra-exitosa', component: CompraExitosaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
