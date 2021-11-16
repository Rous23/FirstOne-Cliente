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
  categoria = false
  empresas = true
  ngOnInit(): void {
  }

}
