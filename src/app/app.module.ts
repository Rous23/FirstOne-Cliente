import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraRetrocesoComponent } from './barra-retroceso/barra-retroceso.component';
import { InformativoComponent } from './informativo/informativo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import { EmpresasFavoritasComponent } from './empresas-favoritas/empresas-favoritas.component';
import { HistorialOrdenesComponent } from './historial-ordenes/historial-ordenes.component';
import { VerificacionRegistroComponent } from './verificacion-registro/verificacion-registro.component';
import { RegistroExitosoComponent } from './registro-exitoso/registro-exitoso.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { OrdenesPendientesComponent } from './ordenes-pendientes/ordenes-pendientes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraExitosaComponent } from './compra-exitosa/compra-exitosa.component';
import { ConfirmarCompraComponent } from './confirmar-compra/confirmar-compra.component';
import { ItemCarritoComponent } from './item-carrito/item-carrito.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { EmpresasCategoriaComponent } from './empresas-categoria/empresas-categoria.component';
import { EmpresaProductosComponent } from './empresa-productos/empresa-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ItemEmpresaHomeComponent } from './item-empresa-home/item-empresa-home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraRetrocesoComponent,
    InformativoComponent,
    IniciarSesionComponent,
    RegistroComponent,
    HomeComponent,
    FooterComponent,
    CategoriasComponent,
    PerfilComponent,
    InformacionPerfilComponent,
    EmpresasFavoritasComponent,
    HistorialOrdenesComponent,
    VerificacionRegistroComponent,
    RegistroExitosoComponent,
    RecuperarContraseniaComponent,
    OrdenesPendientesComponent,
    CarritoComponent,
    CompraExitosaComponent,
    ConfirmarCompraComponent,
    ItemCarritoComponent,
    FormularioCompraComponent,
    EmpresasCategoriaComponent,
    EmpresaProductosComponent,
    ProductosComponent,
    ItemEmpresaHomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
