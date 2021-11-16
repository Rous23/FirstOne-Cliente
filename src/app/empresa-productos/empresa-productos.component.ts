import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empresa-productos',
  templateUrl: './empresa-productos.component.html',
  styleUrls: ['./empresa-productos.component.css']
})
export class EmpresaProductosComponent implements OnInit {

  constructor() { }
  faArrowLeft = faArrowLeft
  faStar = faStar

  ngOnInit(): void {
  }

}
