import { Component, OnInit } from '@angular/core';
import { faUserCog, faSearch} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoriasService } from '../services/categorias.service';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinnerService:NgxSpinnerService,
    private clienteService:ClientesService,
    private cookieService:CookieService
    ) { }
  faUserCog = faUserCog
  faSearch = faSearch
  nombreCliente:String;
  ngOnInit(): void {
    this.spinnerService.show();
    this.clienteService.obtenerUsuario(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        console.log(res.nombres);
        this.nombreCliente = res.nombres
        this.spinnerService.hide();
      },
      error=>{
        console.error(error);
      }
    )
  }
}

