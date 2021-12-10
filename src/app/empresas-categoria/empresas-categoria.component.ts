import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { CategoriasService } from '../services/categorias.service';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-empresas-categoria',
  templateUrl: './empresas-categoria.component.html',
  styleUrls: ['./empresas-categoria.component.css']
})
export class EmpresasCategoriaComponent implements OnInit {
  // empresas:any = [
  //   {
  //     id:21,
  //     nombre:"Walmart",
  //     logo:"../../assets/imagenes-empresas/warmart.png",
  //     banner:"url-banner",
  //     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?",
  //     calificacion:4,
  //     productos:[
  //       {
  //         id:12,
  //         imagen:"url-image-producto",
  //         precio:120
  //       }
  //     ]
  //   },
  //   {
  //     id:22,
  //     nombre:"Diunsa",
  //     logo:"../../assets/imagenes-empresas/diunsa.png",
  //     banner:"url-banner",
  //     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?",
  //     calificacion:4,
  //     productos:[
  //       {
  //         id:12,
  //         imagen:"url-image-producto",
  //         precio:120
  //       }
  //     ]
  //   },
  //   {
  //     id:23,
  //     nombre:"MacDonal's",
  //     logo:"../../assets/imagenes-empresas/macdonal.png",
  //     banner:"url-banner",
  //     descripcion:"loremlks askjds ksjhnsd",
  //     calificacion:4,
  //     productos:[
  //       {
  //         id:12,
  //         imagen:"url-image-producto",
  //         precio:120
  //       }
  //     ]
  //   }
  // ]
  idCategoria:any;
  nombreCategoria:String;
  empresas:any=[]
  color:string;
  constructor(
    private ruta:ActivatedRoute, 
    private router:Router,
    private categoriaService:CategoriasService,
    private clienteService:ClientesService,
    private cookieService:CookieService
    ) { 
    this.ruta.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
    })
  }
  faStar = faStar
  faHeart = faHeart
  ngOnInit(): void {
    this.categoriaService.obtenerCategoria(this.idCategoria).subscribe(
      res=>{
        console.log(res);
        this.empresas = res.empresas;
        this.nombreCategoria = res.nombre
      },
      error=>{
        console.error(error);
      }
    )
  }

  detalleEmpresa(item){
    this.router.navigate([`categorias/${this.idCategoria}/empresas/${item._id}`])
  }

  empresasSeguidas(empresa){
    this.clienteService.obtenerEmpresasFavoritas(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        console.log(res.empresasFavoritas);
        let empresasFavs = res.empresasFavoritas
        if(empresasFavs.length==undefined){
          this.clienteService.guardarEmpresaFavorita(this.cookieService.get('idClienteFirstone'),empresa).subscribe(
            res=>{
              console.log(res);
            },
            error=>{
              console.error(error);
            }
          )
        }else{
          for (let i = 0; i < empresasFavs.length; i++) {
            const element = empresasFavs[i];
            if(element._id == empresa._id){
              this.clienteService.obtenerEmpresasFavoritas(this.cookieService.get('idClienteFirstone')).subscribe(
                res=>{
                  console.log(res);
                },
                error=>{
                  console.error(error);
                }
              )
              this.color="gray"
            }else{
              this.color = "red"
            }
          }
        }
      },
      error=>{
        console.error(error);
      }
    )
  }
}
