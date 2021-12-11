import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAddressCard, faCreditCard, faEdit, faKey, faMapMarkedAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {
  @Output() onGuardarDatos = new EventEmitter();
  cliente:any;

  constructor(
    private modalService:NgbModal,
    private clienteService:ClientesService,
    private cookieService:CookieService,
    private spinnerService:NgxSpinnerService,
    private route:Router
  ){}
  faAddressCard = faAddressCard
  faEdit = faEdit
  faCreditCard = faCreditCard
  faMapMarketAlt = faMapMarkedAlt
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  file:any;
  latitud:number =0;
  longitud:number=0;
  direccion:string="";
  referencia:string="";
  formContrasena= new FormGroup({
    nuevaContrasena:new FormControl('', [Validators.minLength(6), Validators.required]),
    nuevaContrasena2:new FormControl('',[Validators.minLength(6), Validators.required])
  })
  error = false
  ngOnInit(): void {
    this.spinnerService.show();
    this.clienteService.obtenerUsuario(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        console.log(res);
        this.cliente={
          nombres: res.nombres,
          apellidos: res.apellidos,
          usuario: res.usuario,
          genero: res.genero,
          correo: res.correo,
          telefono: res.telefono,
          fechaNacimiento: res.fechaNacimiento
        }
      },
      error=>{
        console.error(error);
      }
    )
    this.clienteService.obtenerDireccion(this.cookieService.get('idClienteFirstone')).subscribe(
      res=>{
        console.log(res);
        this.latitud = res.direccionesEntrega.latitud
        this.longitud = res.direccionesEntrega.longitud
        this.direccion = res.direccionesEntrega.direccion
        this.referencia = res.direccionesEntrega.referencia
      },
      error=>{
        console.error(error);
      }
    )
  }

  modalInformacion(datosPersonales){
    this.modalService.open(datosPersonales,{
      size:'md',
      centered:true
    })
  }

  actualizarCliente(){
    this.clienteService.actualizarDatos(this.cookieService.get('idClienteFirstone'),this.cliente).subscribe(
      res=>{
        console.log(res);
        this.onGuardarDatos.emit()
        this.modalService.dismissAll()
      },
      error=>{
        console.error(error);
      }
    )
  }

  guardarDireccion(){
    let direccion = {
      latitud:this.latitud,
      longitud:this.longitud,
      direccion:this.direccion,
      referencia:this.referencia

    }
    this.clienteService.actualizarDireccion(this.cookieService.get('idClienteFirstone'),direccion).subscribe(
      res=>{
        console.log(res);
        this.onGuardarDatos.emit()
        this.modalService.dismissAll()
      },
      error=>{
        console.error(error);
      }
    )
  }

  actualizarContrasena(){
    if(this.nuevaContrasena.value != this.nuevaContrasena2.value){
      this.error = true
    }else{
      this.clienteService.actualizarContrasena(this.cookieService.get('idClienteFirstone'),this.nuevaContrasena.value).subscribe(
        res=>{
          console.log(res);
          this.onGuardarDatos.emit()
          this.modalService.dismissAll()
          this.nuevaContrasena.setValue('')
          this.nuevaContrasena2.setValue('')
        },
        error=>{
          console.error(error);
        }
      )
    }
  }

  modalTarjetas(tarjetaCliente){
    this.modalService.open(tarjetaCliente,{
      size:'md',
      centered:true
    })
  }
  modalDireccion(direccionEntrega){
    this.modalService.open(direccionEntrega,{
      size:'md',
      centered:true
    })
  }
  modalContrasena(cambioContrasena){
    this.modalService.open(cambioContrasena,{
      size:'md',
      centered:true
    })
  }
  cerrarSesion(){
    this.cookieService.delete('idClienteFirstone');
    this.route.navigate(['/iniciar-sesion'])
  }
  
  
  onFileSelect(event){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      //console.log(this.file);
    }
  }

  latlong(data){
    this.latitud = data[0]
    this.longitud = data[1]
  }

  get nuevaContrasena(){
    return this.formContrasena.get('nuevaContrasena')
  }

  get nuevaContrasena2(){
    return this.formContrasena.get('nuevaContrasena2')
  }


  // onSubmit() {
  //   //console.log(formData);
  //   this.clienteService.actualizarImagen('61afe41a1db60378c43b65d5', this.file).subscribe(
  //     res=>{
  //       console.log(res);
  //     },
  //     error=>{
  //       console.error(error);
  //     }
  //   )
  // }
}
