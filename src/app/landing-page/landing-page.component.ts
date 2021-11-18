import { Component, OnInit } from '@angular/core';
import { faBookOpen, faDolly } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  faBookOpen = faBookOpen
  faDolly = faDolly

  ngOnInit(): void {
  }

}
