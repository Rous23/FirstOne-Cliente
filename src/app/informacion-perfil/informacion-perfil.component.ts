import { Component, OnInit } from '@angular/core';
import { faAddressCard, faCreditCard, faEdit, faKey, faMapMarkedAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  uploadForm:FormGroup;

  constructor(
    private modalService:NgbModal,
    private formBuilder: FormBuilder,
    private clientesService:ClientesService
  ){}
  faAddressCard = faAddressCard
  faEdit = faEdit
  faCreditCard = faCreditCard
  faMapMarketAlt = faMapMarkedAlt
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  file:any;
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  modalInformacion(datosPersonales){
    this.modalService.open(datosPersonales,{
      size:'md',
      centered:true
    })
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
  cerrarSesion(){}
  onFileSelect(event){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);
    console.log(formData);
    this.clientesService.actualizarImagen('61afe41a1db60378c43b65d5', formData).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(this.file);
        console.error(error);
      }
    )
  }
}
