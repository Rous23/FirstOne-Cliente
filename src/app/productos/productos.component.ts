import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Output() OnAgregarCarrito = new EventEmitter();
  faShoppingCart = faShoppingCart
  faCartPlus= faCartPlus
  productos:any;
  productosCarrito:any = [];
  notificacionCarrito:number = 0;
  idCategoria:any;
  idEmpresa:any
  constructor(
    private categoriaService:CategoriasService,
    private ruta:ActivatedRoute
  ) {
    this.ruta.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
      this.idEmpresa = params.idEmpresa
    });
  }

  ngOnInit(): void {
    let productosLocalStorage:any = [];
    if (localStorage.getItem('carritoCompras')!=null) {
      productosLocalStorage = JSON.parse(localStorage.getItem('carritoCompras'));
      // console.log(productosLocalStorage.length);
      this.notificacionCarrito = productosLocalStorage.length;
    }

    this.categoriaService.obtenerProductos(this.idCategoria,this.idEmpresa).subscribe(
      res=>{
        console.log("porductosComponent",res);
        this.productos = res
      },
      error=>{
        console.error(error);
      }
    )
  }

  agregarProductoCarrito(producto){
    console.log('agregar a localstorage');
    this.notificacionCarrito += 1;
    let localStorage = window.localStorage;
    let agregarProducto = {
      id:producto._id,
      nombre:producto.nombre,
      descripcion:producto.descripcion,
      imagen:producto.imagen,
      cantidad:1,
      isv:"15%",
      precio:producto.precio
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

  // agregarProductoCarrito(){
  
  // }

