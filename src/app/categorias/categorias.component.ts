import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias:any = [
    {
      codigo: 1,
      nombreCategoria:"Restaurantes",
      imagen:"url-image",
      empresas:[
        {
          codigo:21,
          nombre:"Empresa1",
          logo:"url-logo",
          banner:"url-banner",
          descripcion:"loremlks askjds ksjhnsd",
          calificacion:4,
          productos:[
            {
              codigo:12,
              imagen:"url-image-producto",
              precio:120
            }
          ]
        }
      ]
    },
    {
      codigo: 1,
      nombreCategoria:"Restaurantes",
      imagen:"url-image",
      empresas:[
        {
          codigo:21,
          nombre:"Empresa1",
          logo:"url-logo",
          banner:"url-banner",
          descripcion:"loremlks askjds ksjhnsd",
          calificacion:4,
          productos:[
            {
              codigo:12,
              imagen:"url-image-producto",
              precio:120
            }
          ]
        }
      ]
    },
  ]
  constructor() { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
  }

}
