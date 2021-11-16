import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-historial-ordenes',
  templateUrl: './historial-ordenes.component.html',
  styleUrls: ['./historial-ordenes.component.css']
})
export class HistorialOrdenesComponent implements OnInit {

  constructor() { }
  faChevronRight = faChevronRight
  ngOnInit(): void {
  }

}
