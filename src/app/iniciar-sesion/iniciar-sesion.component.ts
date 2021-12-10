import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from '../services/clientes.service';
import { faThList } from '@fortawesome/free-solid-svg-icons';

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
  error=false;
  constructor(
    private route:Router, 
    private cookieService:CookieService,
    private clienteService:ClientesService
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
    this.clienteService.iniciarSesion(this.formInicio.value).subscribe(
      res=>{
        console.log(res);
        if(res!=null){
          this.cookieService.set('idClienteFirstone', res._id);
          this.route.navigate(['/home']);
        }else{
          this.error=true
          this.correo.setValue('');
          this.password.setValue('');
        }
      },
      error=>{
        console.error(error);
      }
    )
    // this.cookieValue = this.cookieService.get('Test');
    

  }

}
