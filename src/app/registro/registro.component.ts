import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegistro = new FormGroup(
    {
      nombres: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ),
      apellidos: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ),
      usuario: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^@[a-z0-9]*$/)
        ]
      ),
      fechaNacimiento:new FormControl('',
        [
          Validators.required,
        ]
      ),
      genero: new FormControl('',
        [
          Validators.required
        ]
      ),
      telefono: new FormControl('',
        [
          Validators.required,
          Validators.pattern(/^\d{4}-\d{4}$/)
        ]
      ),
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
      ),
      password2:new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
    }
  );
  cookieValue:string;
  error=false;
  constructor(
    private route:Router, 
    private cookieService:CookieService,
    private clientesService:ClientesService
  ) {}
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  ngOnInit(): void {
  }

  get nombres() {
    return this.formRegistro.get('nombres');
  }
  get apellidos() {
    return this.formRegistro.get('apellidos');
  }
  get usuario() {
    return this.formRegistro.get('usuario');
  }
  get correo() {
    return this.formRegistro.get('correo');
  }
  get fechaNacimiento() {
    return this.formRegistro.get('fechaNacimiento');
  }
  get genero() {
    return this.formRegistro.get('genero');
  }
  get telefono() {
    return this.formRegistro.get('telefono');
  }
  get password() {
    return this.formRegistro.get('password');
  }
  get password2() {
    return this.formRegistro.get('password2');
  }


  registrarUsuario(){
    console.log(this.formRegistro.value);
    //console.log(this.formRegistro.valid);
    this.clientesService.registrarse(this.formRegistro.value).subscribe(
      res=>{
        console.log(res);
        if(res != null){
          this.cookieService.set('idClienteFirstone', res._id);
          this.route.navigate(['/home']);
        }
      },
      error=>console.error(error)
    )
    //this.cookieValue = this.cookieService.get('Test');
  }

}
