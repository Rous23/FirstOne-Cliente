import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BarraRetrocesoComponent } from './barra-retroceso/barra-retroceso.component';
import { InformativoComponent } from './informativo/informativo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';
import { EmpresasFavoritasComponent } from './empresas-favoritas/empresas-favoritas.component';
import { HistorialOrdenesComponent } from './historial-ordenes/historial-ordenes.component';

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
    EmpresasComponent,
    PerfilComponent,
    InformacionPerfilComponent,
    EmpresasFavoritasComponent,
    HistorialOrdenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
