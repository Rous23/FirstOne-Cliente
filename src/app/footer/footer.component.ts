import { Component, OnInit } from '@angular/core';
import { faHome, faClipboardList, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  faHome = faHome
  faClipboardList = faClipboardList
  faUser = faUser
  faHeart = faHeart
  faShoppingCart = faShoppingCart
  ngOnInit(): void {
  }

}
