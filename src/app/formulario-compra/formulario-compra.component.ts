import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent implements OnInit {
  verMapa = false
  mostrarForm = false
  latitud:number =0;
  longitud:number=0;
  boolean:boolean = false;
  direccion:String;
  referencia:String;
  @Output() onDireccionCliente = new EventEmitter()
  constructor(
    private clienteService:ClientesService,
    private cookieService:CookieService
  ) { }

  ngOnInit(): void {
    this.clienteService.obtenerDireccion(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        if (res.direccionesEntrega.length != 0) {
          this.boolean = true
          this.direccion = res.direccionesEntrega.direccion
          this.latitud = res.direccionesEntrega.latitud
          this.longitud = res.direccionesEntrega.longitud
          this.referencia = res.direccionesEntrega.referencia
          this.onDireccionCliente.emit({direccion:this.direccion, latitud:this.latitud, longitud:this.longitud, referencia:this.referencia})
        }
      },
      error=>{
        console.error(error);
      }
    )
  }

  mostrarMapa(){
    if(this.verMapa){
      this.verMapa = false;
    }else{
      this.verMapa = true
    }
  }

  mostrarFormularioTarjeta(){
    this.mostrarForm = true
  }

  ocultarFormularioTarjeta(){
    this.mostrarForm = false
  }

  latlong(data){
    this.latitud = data[0]
    this.longitud = data[1]
  }

}
