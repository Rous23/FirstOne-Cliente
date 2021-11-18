import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSearch, faAddressBook, faStore, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  faArrowLeft = faArrowLeft
  faSearch = faSearch
  faAddressBook = faAddressBook
  faStore = faStore
  faClipboardCheck = faClipboardCheck
  verRegion = 'informacionPersonal'
  ngOnInit(): void {
  }

  verInformacion(){
    if(this.verRegion != 'informacionPersonal'){
      this.verRegion = 'informacionPersonal'
    }
  }
  verEmpresasFavs(){
    if(this.verRegion != 'empresasFavoritas'){
      this.verRegion = 'empresasFavoritas'
    }
  }
  verHistorial(){
    if(this.verRegion != 'historialOrdenes'){
      this.verRegion = 'historialOrdenes'
    }
  }
}
