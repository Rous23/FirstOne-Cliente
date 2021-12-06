import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      nombre:"Walmart",
      logo:"../../assets/imagenes-empresas/warmart.png",
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
  idCategoria:any;
  constructor(private ruta:ActivatedRoute, private router:Router) { 
    this.ruta.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
    })
  }
  faStar = faStar
  faHeart = faHeart
  ngOnInit(): void {
  }

  detalleEmpresa(item){
    this.router.navigate(['empresa-productos',item.id])
  }
}
