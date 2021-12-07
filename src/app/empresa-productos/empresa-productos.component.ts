import { Component, OnInit, ViewChild } from '@angular/core';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-empresa-productos',
  templateUrl: './empresa-productos.component.html',
  styleUrls: ['./empresa-productos.component.css']
})
export class EmpresaProductosComponent implements OnInit {
  @ViewChild('footer') footerComponent:FooterComponent;
  empresas:any = [
    {
      id:21,
      nombre:"Walmart",
      logo:"../../assets/imagenes-empresas/warmart.png",
      banner:"url-banner",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?",
      calificacion:2,
      email:"walmar@gmail.com",
      productos:[
        {
          id:12,
          imagen:"url-image-producto",
          precio:120
        }
      ]
    },
    {
      id:22,
      nombre:"Diunsa",
      logo:"../../assets/imagenes-empresas/diunsa.png",
      banner:"url-banner",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?",
      calificacion:4,
      productos:[
        {
          id:12,
          imagen:"url-image-producto",
          precio:120
        }
      ]
    },
    {
      id:23,
      nombre:"MacDonal's",
      logo:"../../assets/imagenes-empresas/macdonal.png",
      banner:"url-banner",
      descripcion:"loremlks askjds ksjhnsd",
      calificacion:4,
      productos:[
        {
          id:12,
          imagen:"url-image-producto",
          precio:120
        }
      ]
    }
  ]
  empresa:any;
  idCategoria:any;
  idEmpresa:any;
  calificacion=[];
  constructor(private _location:Location, private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(params => {
      this.idEmpresa = params.idEmpresa;
    });
  }
  faArrowLeft = faArrowLeft
  fasStar = faStar
  farStar = farStar

  ngOnInit(): void {
    console.log(this.idEmpresa);
    this.empresas.forEach(element => {
      if(element.id == this.idEmpresa){
        console.log(element);
        this.empresa = element
      }
    });
  }

  back(){
    this._location.back();
  }

  agregarNotificacion(dato){
    console.log(dato);
    this.footerComponent.sumarCantidadCarrito(dato);
  }

}
