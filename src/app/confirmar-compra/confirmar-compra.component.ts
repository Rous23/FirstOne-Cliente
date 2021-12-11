import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit {
  datosCompra:any=[]
  subTotal:any;
  isv:any;
  delivery:any = 60.00;
  total:any;
  usuarioDireccion:any;
  usuario:any;
  constructor(
    private clienteService:ClientesService,
    private cookieService:CookieService,
    private spinnerService:NgxSpinnerService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    if (this.cookieService.get('idClienteFirstone')) {
      if (localStorage.getItem('checkoutCompra')!=null) {
        this.datosCompra = JSON.parse(localStorage.getItem('checkoutCompra'));
      }
      this.subTotal = (this.datosCompra.total/1.15).toPrecision(6)
      this.isv = (this.subTotal*0.15).toPrecision(4)
      this.total = (parseFloat(this.subTotal) + parseFloat(this.isv) + parseFloat(this.delivery)).toPrecision(6);
      this.datosCompra.total = this.total;
  
      this.clienteService.obtenerUsuario(this.cookieService.get('idClienteFirstone')).subscribe(
        res=>{
          this.usuario = res
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

  direccionUsuario(event){
    this.usuarioDireccion = event
  }

  ordenRealizada(){
    let enviarOrden = {
      "fecha": new Date(),
      "total": this.datosCompra.total,
      "idCliente": this.usuario._id,
      "nombres": this.usuario.nombres,
      "apellidos": this.usuario.apellidos,
      "telefono": this.usuario.telefono,
      "direccion": this.usuarioDireccion.direccion,
      "referencia":  this.usuarioDireccion.referencia,
      "longitud": this.usuarioDireccion.longitud,
      "latitud": this.usuarioDireccion.latitud,
      "productos": this.datosCompra.productos
    }

    this.clienteService.guardarOrden(enviarOrden).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.error(error);
      }
    )
  }
}
