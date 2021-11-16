import { Component, OnInit } from '@angular/core';
import { faAddressCard, faCreditCard, faEdit, faKey, faMapMarkedAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  constructor() { }
  faAddressCard = faAddressCard
  faEdit = faEdit
  faCreditCard = faCreditCard
  faMapMarketAlt = faMapMarkedAlt
  faKey = faKey
  faSingOutAlt = faSignOutAlt
  ngOnInit(): void {
  }

}
