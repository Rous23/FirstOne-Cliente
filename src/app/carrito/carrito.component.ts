import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosLocalStorage:any = [];
  faTimes = faTimes
  faMinus = faMinus
  faPlus = faPlus
  total:string = "0";
  datos:any;
  constructor(
    private route:Router,
    private spinnerService:NgxSpinnerService,
    private cookieService:CookieService
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    if (this.cookieService.get('idClienteFirstone')) {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinnerService.hide();
      }, 900);
      if (localStorage.getItem('carritoCompras')!=null) {
        this.productosLocalStorage = JSON.parse(localStorage.getItem('carritoCompras'));
        if (this.productosLocalStorage.length == 0) {
          this.datos=false
        }else{
          this.datos=true
        }
        console.log(this.productosLocalStorage);
      }
  
      this.calcularTotal();
    }else{
      this.route.navigate(['/iniciar-sesion'])
    }
  }
  
  minus(id){
    console.log(id);
    for (const producto of this.productosLocalStorage) {
      if(producto.id == id){
        if(producto.cantidad > 1){
          producto.cantidad -= 1;
          this.calcularTotal();
        }
      }
    }
    
  }

  plus(id){
    for (const producto of this.productosLocalStorage) {
      if(producto.id == id){
        producto.cantidad += 1;
        this.calcularTotal();
      }
    }
  }

  eliminarProductoCarrito(_id){
    console.log(_id);
    for (let i = 0; i < this.productosLocalStorage.length; i++) {
      if(this.productosLocalStorage[i].id == _id){
        this.productosLocalStorage.splice(i,1)
        localStorage.setItem('carritoCompras', JSON.stringify(this.productosLocalStorage));
        this.calcularTotal();
      }
    }
    console.log(this.productosLocalStorage);
    
  }
  
  calcularTotal(){
    let count:number=0;
    for (let i = 0; i < this.productosLocalStorage.length; i++) {
      count += (this.productosLocalStorage[i].precio*this.productosLocalStorage[i].cantidad*1.15) 
    }

    this.total = count.toPrecision(6);
    console.log(this.total);
    
  }

  confirmarCompra(){
    let datosConf = {
        productos:this.productosLocalStorage,
        total:this.total
      }
    localStorage.setItem('checkoutCompra', JSON.stringify(datosConf));
    this.route.navigate(['confirmar-compra'])
  }

}
