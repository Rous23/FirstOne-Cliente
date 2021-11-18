import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faClipboardList, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route:Router) { }
  faHome = faHome
  faClipboardList = faClipboardList
  faUser = faUser
  faHeart = faHeart
  faShoppingCart = faShoppingCart
  iconoActivo:string;
  ngOnInit(): void {
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
      console.log("Entro ordenes");
      this.route.navigate(['/ordenes-pendientes'])
    }
  }
  verPerfil(){
    if(this.iconoActivo != 'perfil'){
      this.iconoActivo = 'perfil'
      console.log("Entro perfil");
      this.route.navigate(['/perfil'])
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
      console.log("Entro carrito");
      this.route.navigate(['/carrito'])
    }
  }

}
