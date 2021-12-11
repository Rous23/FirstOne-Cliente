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
      logo:"https://res.cloudinary.com/dekixopkw/image/upload/v1639041859/FirstOne/categorias/empresas/stmeqlhe4itgngikyezf.png",
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
      logo:"https://res.cloudinary.com/dekixopkw/image/upload/v1639038138/FirstOne/categorias/empresas/yqrasq6z322gtxv2kfog.png",
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
      logo:"https://res.cloudinary.com/dekixopkw/image/upload/v1639041859/FirstOne/categorias/empresas/boyqltekti76yuqazvob.png",
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
