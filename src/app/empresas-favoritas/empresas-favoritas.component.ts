import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empresas-favoritas',
  templateUrl: './empresas-favoritas.component.html',
  styleUrls: ['./empresas-favoritas.component.css']
})
export class EmpresasFavoritasComponent implements OnInit {

  constructor() { }
  faTrash = faTrash
  ngOnInit(): void {
  }

}
