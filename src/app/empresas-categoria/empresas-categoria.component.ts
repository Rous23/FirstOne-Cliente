import { Component, OnInit } from '@angular/core';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empresas-categoria',
  templateUrl: './empresas-categoria.component.html',
  styleUrls: ['./empresas-categoria.component.css']
})
export class EmpresasCategoriaComponent implements OnInit {
  empresas:any = [
    {
      id:21,
      nombre:"Empresa1",
      logo:"url-logo",
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
    },
    {
      id:22,
      nombre:"Empresa2",
      logo:"url-logo",
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
    },
    {
      id:23,
      nombre:"Empresa3",
      logo:"url-logo",
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
    },
    {
      id:24,
      nombre:"Empresa4",
      logo:"url-logo",
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
  constructor() { }
  faStar = faStar
  faHeart = faHeart
  ngOnInit(): void {
  }

}
