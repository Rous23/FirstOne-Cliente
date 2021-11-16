import { Component, OnInit } from '@angular/core';
import { faUserCog, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  faUserCog = faUserCog
  faSearch = faSearch
  ngOnInit(): void {
  }

}
