import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-ordenes-pendientes',
  templateUrl: './ordenes-pendientes.component.html',
  styleUrls: ['./ordenes-pendientes.component.css']
})
export class OrdenesPendientesComponent implements OnInit {
  ordenesPendientes:any=[]
  constructor(
    private clienteService:ClientesService,
    private cookieService:CookieService,
    private spinnerService:NgxSpinnerService,
    private route:Router
  ) { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
    this.spinnerService.show();
    if (this.cookieService.get('idClienteFirstone')) {
      this.clienteService.obtenerOrdenesPendientes(this.cookieService.get('idClienteFirstone')).subscribe(
        res=>{
          console.log(res);
          this.ordenesPendientes = res.ordenesPendientesEntrega
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

}
