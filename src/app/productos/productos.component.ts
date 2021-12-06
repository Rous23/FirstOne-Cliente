import { Component, OnInit } from '@angular/core';
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  faShoppingCart = faShoppingCart
  faCartPlus= faCartPlus
  constructor() { }

  ngOnInit(): void {
  }

  agregarProductoCarrito(){
    console.log('agregar a localstorage');
    
  }
}
