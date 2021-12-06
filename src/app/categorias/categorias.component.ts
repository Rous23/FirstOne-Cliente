import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      nombreCategoria:"Cosmeticos",
      imagen:"../../assets/categorias/cosmetics.svg",
      color:"rgb(255, 168, 180)",
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
      codigo: 2,
      nombreCategoria:"Farmacias",
      imagen:"../../assets/categorias/pharmacy-2.png",
      color:"#A5D5D5",
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
      codigo: 3,
      nombreCategoria:"Super",
      imagen:"../../assets/categorias/food-2.png",
      color:"#FAB29E",
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
      codigo: 4,
      nombreCategoria:"Ropa",
      imagen:"../../assets/categorias/clothes.png",
      color:"#F0D5BA",
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
      codigo: 5,
      nombreCategoria:"Calzado",
      imagen:"../../assets/categorias/shoes.png",
      color:"#D5B89A",
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
      codigo: 6,
      nombreCategoria:"Restaurantes",
      imagen:"../../assets/categorias/fast-food.png",
      color:"#C2D5A8",
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
      codigo: 7,
      nombreCategoria:"Ferreteria",
      imagen:"../../assets/categorias/herramienta-de-martillo.png",
      color:"#B5C5D7",
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
      codigo: 8,
      nombreCategoria:"Papeleria",
      imagen:"../../assets/categorias/papeleria.png",
      color:"#C1D0ED",
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
      codigo: 9,
      nombreCategoria:"Joyeria",
      imagen:"../../assets/categorias/joyas.png",
      color:"#B0ABCB",
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
      codigo: 10,
      nombreCategoria:"Hogar",
      imagen:"../../assets/categorias/muebles.png",
      color:"rgb(94, 155, 156, .6)",
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
      codigo: 11,
      nombreCategoria:"Tecnologia",
      imagen:"../../assets/categorias/dispositivos.png",
      color:"#BACEF3",
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
      codigo: 12,
      nombreCategoria:"Panaderia",
      imagen:"../../assets/categorias/panaderia.png",
      color:"#E3A7C0",
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
      codigo: 13,
      nombreCategoria:"Café",
      imagen:"../../assets/categorias/cafe.png",
      color:"#E7B985",
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
      codigo: 14,
      nombreCategoria:"Videojuegos",
      imagen:"../../assets/categorias/videojuegos.png",
      color:"#E7B985",
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
    }
  ]
  constructor(private route:Router) { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
  }

  detalleCategoria(item){
    this.route.navigate(['empresas-categoria',item.codigo])
  }
}
