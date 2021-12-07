import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formInicio = new FormGroup(
    {
      correo:new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
      ]
      ),
      password:new FormControl('',
      [
        Validators.required,
        Validators.minLength(6)
      ]
      )
    }
  )
  cookieValue:string;
  constructor(
    private route:Router, 
    private cookieService:CookieService
  ) { }
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  ngOnInit(): void {
  }

  get correo(){
    return this.formInicio.get('correo')
  }

  get password(){
    return this.formInicio.get('password')
  }

  iniciarSesion(){
    console.log(this.formInicio.value);
    console.log(this.formInicio.valid);
    // this.cookieService.set('Test', 'Hello World');
    // this.cookieValue = this.cookieService.get('Test');
    this.route.navigate(['/home']);

  }

}
