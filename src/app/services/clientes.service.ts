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

  registrarse(datos):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/clientes/registrarse`, datos);
  }

  actualizarDatos(cliente, datos):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/clientes/${cliente}/actualizar-datos`, datos);
  }

  actualizarContrasena(cliente, contrasena):Observable<any>{
    let dato={
      contrasena:contrasena
    }
    return this.httpClient.put(`http://localhost:8888/clientes/${cliente}/actualizar-contrasena`, dato);
  }

  actualizarDireccion(cliente, datos):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/clientes/${cliente}/direccion-entrega`, datos);
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

  obtenerDireccion(idCliente):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes/${idCliente}/direccion-entrega`);
  }
}