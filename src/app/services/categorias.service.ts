import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient:HttpClient) { }

  obtenerCategorias():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias`)
  }

  obtenerCategoria(idCategoria):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/`)
  }

  obtenerEmpresa(idCategoria,idEmpresa):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/empresas/${idEmpresa}`)
  }

  obtenerProductos(idCategoria,idEmpresa):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/empresas/${idEmpresa}/productos`)

  }
}
