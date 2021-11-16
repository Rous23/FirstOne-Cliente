import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { }
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  ngOnInit(): void {
  }

}
