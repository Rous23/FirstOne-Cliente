import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  ngOnInit(): void {
  }

}
