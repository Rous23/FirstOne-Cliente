import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient:HttpClient) {}

  actualizarImagen(cliente, imagen):Observable<any>{
    return this.httpClient.put(`http://localhost:8880/clientes/${cliente}/actualizar-imagen`, {file: imagen});
  }
}