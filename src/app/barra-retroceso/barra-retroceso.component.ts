import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-barra-retroceso',
  templateUrl: './barra-retroceso.component.html',
  styleUrls: ['./barra-retroceso.component.css']
})
export class BarraRetrocesoComponent implements OnInit {
  
  constructor(private _location:Location) { }
  faArrowLeft = faArrowLeft;
  ngOnInit(): void {
  }

  _back(){
    this._location.back();
  }
}
