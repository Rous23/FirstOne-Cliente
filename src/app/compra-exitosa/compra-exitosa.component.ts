import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.css']
})
export class CompraExitosaComponent implements OnInit {

  constructor(private route:Router,
      private spinnerService:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 900);
  }

  irHome(){
    let localStorage = window.localStorage;
    localStorage.setItem('carritoCompras', JSON.stringify([]));
    localStorage.setItem('checkoutCompra', JSON.stringify({}));
    this.route.navigate(['/home'])
  }

}
