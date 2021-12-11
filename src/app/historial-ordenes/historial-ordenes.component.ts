import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-historial-ordenes',
  templateUrl: './historial-ordenes.component.html',
  styleUrls: ['./historial-ordenes.component.css']
})
export class HistorialOrdenesComponent implements OnInit {
  datosHistorial:any=[]
  constructor(private clienteService:ClientesService,
    private cookieService:CookieService
    ) { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
    this.clienteService.obtenerHistorialOrdenes(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        console.log(res);
        this.datosHistorial = res.historialOrdenes
      },
      error=>{
        console.error(error);
      }
    )
  }

}
