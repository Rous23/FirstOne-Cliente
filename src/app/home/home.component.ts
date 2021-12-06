import { Component, OnInit } from '@angular/core';
import { faUserCog, faSearch} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinnerService:NgxSpinnerService) { }
  faUserCog = faUserCog
  faSearch = faSearch
  ngOnInit(): void {
    this.spinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 5000);
  }
}

