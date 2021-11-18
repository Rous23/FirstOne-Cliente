import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empresa-productos',
  templateUrl: './empresa-productos.component.html',
  styleUrls: ['./empresa-productos.component.css']
})
export class EmpresaProductosComponent implements OnInit {

  constructor(private _location:Location) { }
  faArrowLeft = faArrowLeft
  faStar = faStar

  ngOnInit(): void {
  }
  back(){
    this._location.back();
  }
}
