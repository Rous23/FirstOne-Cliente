import { Component, OnInit } from '@angular/core';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empresas-categoria',
  templateUrl: './empresas-categoria.component.html',
  styleUrls: ['./empresas-categoria.component.css']
})
export class EmpresasCategoriaComponent implements OnInit {

  constructor() { }
  faStar = faStar
  faHeart = faHeart
  ngOnInit(): void {
  }

}
