import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.css']
})
export class ItemCarritoComponent implements OnInit {

  constructor() { }
  faTimes = faTimes
  faMinus = faMinus
  faPlus = faPlus
  count:number = 1;

  ngOnInit(): void {
  }

  minus(){
    if(this.count > 1){
      this.count -= 1;
    }
  }

  plus(){
    this.count += 1;
  }
}
