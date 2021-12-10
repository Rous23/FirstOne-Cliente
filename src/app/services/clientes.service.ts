import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient:HttpClient) {}

  iniciarSesion(datos):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/clientes`, datos);
  }

  actualizarImagen(cliente, imagen:File):Observable<any>{
    const formData = new FormData;
    formData.append('imagen', imagen);
    
    return this.httpClient.put(`http://localhost:8888/clientes/${cliente}/actualizar-imagen`, formData);
  }

  obtenerUsuario(idCliente):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes/${idCliente}`);
  }

  obtenerEmpresasFavoritas(idCliente):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes/${idCliente}/empresas-favoritas`);
  }

  guardarEmpresaFavorita(idCliente,data):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/clientes/${idCliente}/empresas-favoritas`,data);
  }
}