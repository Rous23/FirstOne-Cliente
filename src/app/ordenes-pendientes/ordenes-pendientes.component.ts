import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ordenes-pendientes',
  templateUrl: './ordenes-pendientes.component.html',
  styleUrls: ['./ordenes-pendientes.component.css']
})
export class OrdenesPendientesComponent implements OnInit {

  constructor() { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
  }

}
