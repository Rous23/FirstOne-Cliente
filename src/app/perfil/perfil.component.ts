import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSearch, faAddressBook, faStore, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from '../services/clientes.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombreCliente:String
  correo:String
  imagen:string
  constructor(private clienteService:ClientesService,
    private cookieService:CookieService,
    private _location:Location,
    private spinnerService:NgxSpinnerService,
    private route:Router
    ) { }
  faArrowLeft = faArrowLeft
  faSearch = faSearch
  faAddressBook = faAddressBook
  faStore = faStore
  faClipboardCheck = faClipboardCheck
  verRegion = 'informacionPersonal'
  ngOnInit(): void {
    this.spinnerService.show();
    if (this.cookieService.get('idClienteFirstone')) {
      this.clienteService.obtenerUsuario(this.cookieService.get('idClienteFirstone')).subscribe(
        res=>{
          console.log(res.nombres);
          this.nombreCliente = res.nombres
          this.correo = res.correo
          this.imagen = res.imagen
          this.spinnerService.hide();
        },
        error=>{
          console.error(error);
        }
      )
    }else{
      this.route.navigate(['/iniciar-sesion'])
    }
  }

  verInformacion(){
    if(this.verRegion != 'informacionPersonal'){
      this.verRegion = 'informacionPersonal'
      this.ngOnInit()
    }
  }
  verEmpresasFavs(){
    if(this.verRegion != 'empresasFavoritas'){
      this.verRegion = 'empresasFavoritas'
      this.ngOnInit()
    }
  }
  verHistorial(){
    if(this.verRegion != 'historialOrdenes'){
      this.verRegion = 'historialOrdenes'
      this.ngOnInit()
    }
  }

  _back(){
    this._location.back();
  }

  actualizarPagina(){
    this.ngOnInit()
  }

}
