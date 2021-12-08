import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit {
  datosCompra:any=[]
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('checkoutCompra')!=null) {
      this.datosCompra = JSON.parse(localStorage.getItem('checkoutCompra'));
      console.log(this.datosCompra);
    }
  }

  ordenRealizada(){
    let localStorage = window.localStorage;
    localStorage.setItem('carritoCompras', JSON.stringify([]));
    localStorage.setItem('checkoutCompra', JSON.stringify([]));
  }
}
