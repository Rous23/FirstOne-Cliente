import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Output() OnAgregarCarrito = new EventEmitter();
  faShoppingCart = faShoppingCart
  faCartPlus= faCartPlus
  producto:any = {
    id:"123",
    nombre:"Ninguno",
    descripcion:"Lorem ipsum",
    imagen:"urlImage"
  }
  productosCarrito:any = [];
  notificacionCarrito:number = 0;
  constructor() { }

  ngOnInit(): void {
    let productosLocalStorage:any = [];
    if (localStorage.getItem('carritoCompras')!=null) {
      productosLocalStorage = JSON.parse(localStorage.getItem('carritoCompras'));
      // console.log(productosLocalStorage.length);
      this.notificacionCarrito = productosLocalStorage.length;
    }
  }

  agregarProductoCarrito(){
    console.log('agregar a localstorage');
    this.notificacionCarrito += 1;
    let localStorage = window.localStorage;
    let agregarProducto = {
      id:this.producto.id,
      nombre:this.producto.nombre,
      descripcion:this.producto.descripcion,
      imagen:this.producto.imagen,
      cantidad:1,
      isv:"15%"
    }
    
    if (localStorage.getItem('carritoCompras')!=null) {
      this.productosCarrito = JSON.parse(localStorage.getItem('carritoCompras'));
      this.productosCarrito.push(agregarProducto);
      localStorage.setItem('carritoCompras', JSON.stringify(this.productosCarrito));
    } else {
      this.productosCarrito.push(agregarProducto);
      localStorage.setItem('carritoCompras', JSON.stringify(this.productosCarrito));
    }

    this.OnAgregarCarrito.emit(this.notificacionCarrito);
  }
}
