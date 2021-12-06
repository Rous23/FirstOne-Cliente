import { Component, OnInit } from '@angular/core';
import { faAddressCard, faCreditCard, faEdit, faKey, faMapMarkedAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  faAddressCard = faAddressCard
  faEdit = faEdit
  faCreditCard = faCreditCard
  faMapMarketAlt = faMapMarkedAlt
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  ngOnInit(): void {
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

  cerrarSesion(){

  }
}
