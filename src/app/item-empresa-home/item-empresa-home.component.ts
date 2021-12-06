import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-empresa-home',
  templateUrl: './item-empresa-home.component.html',
  styleUrls: ['./item-empresa-home.component.css']
})
export class ItemEmpresaHomeComponent implements OnInit {
  empresas:any = [
    {
      id:21,
      nombre:"Walmart",
      logo:"../../assets/imagenes-empresas/warmart.png",
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
      nombre:"Diunsa",
      logo:"../../assets/imagenes-empresas/diunsa.png",
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
  constructor() { }

  ngOnInit(): void {
  }

}
