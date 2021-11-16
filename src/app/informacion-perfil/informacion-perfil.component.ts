import { Component, OnInit } from '@angular/core';
import { faCreditCard, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  constructor() { }
  faEdit = faEdit
  faCreditCard = faCreditCard
  ngOnInit(): void {
  }

}
