import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faClipboardList, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route:Router,
    private cookieService:CookieService) { }
  faHome = faHome
  faClipboardList = faClipboardList
  faUser = faUser
  faHeart = faHeart
  faShoppingCart = faShoppingCart
  iconoActivo:string;
  notificacion:number;
  boolean = false;
  ngOnInit(): void {
    let productosLocalStorage:any = [];
    if (localStorage.getItem('carritoCompras')!=null) {
      productosLocalStorage = JSON.parse(localStorage.getItem('carritoCompras'));
      // console.log(productosLocalStorage.length);
      if(productosLocalStorage.length != 0){
        this.notificacion = productosLocalStorage.length;
        this.boolean = true
      }
    }
  }

  verHome(){
    if(this.iconoActivo != 'home'){
      this.iconoActivo = 'home'
      console.log("Entro Home");
      this.route.navigate(['/home'])
    }
  }
  verOrdenes(){
    if(this.iconoActivo != 'ordenes'){
      this.iconoActivo = 'ordenes'
      if(this.cookieService.get('idClienteFirstone')){
        this.route.navigate(['/ordenes-pendientes'])
      }else{
        this.route.navigate(['/iniciar-sesion'])
      }
    }
  }
  verPerfil(){
    if(this.iconoActivo != 'perfil'){
      this.iconoActivo = 'perfil';
      if(this.cookieService.get('idClienteFirstone')){
        this.route.navigate(['/perfil'])
      }else{
        this.route.navigate(['/iniciar-sesion'])
      }
    }
  }
  verListaDeseos(){
    if(this.iconoActivo != 'deseos'){
      this.iconoActivo = 'deseos'
      console.log("Entro deseos");
      this.route.navigate(['/perfil'])
    }
  }
  verCarrito(){
    if(this.iconoActivo != 'carrito'){
      this.iconoActivo = 'carrito'
      if(this.cookieService.get('idClienteFirstone')){
        this.route.navigate(['/carrito'])
      }else{
        this.route.navigate(['/iniciar-sesion'])
      }
    }
  }

  sumarCantidadCarrito(dato){
    this.boolean = true;
    this.notificacion = dato
    console.log(this.boolean, this.notificacion);
    
  }

}
