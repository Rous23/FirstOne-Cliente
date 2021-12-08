import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent implements OnInit {
  verMapa = false
  mostrarForm = false
  latitud:number =0;
  longitud:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMapa(){
    if(this.verMapa){
      this.verMapa = false;
    }else{
      this.verMapa = true
    }
  }

  mostrarFormularioTarjeta(){
    this.mostrarForm = true
  }

  ocultarFormularioTarjeta(){
    this.mostrarForm = false
  }

  latlong(data){
    this.latitud = data[0]
    this.longitud = data[1]
  }

}
