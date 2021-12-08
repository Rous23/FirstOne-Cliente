import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() onLatLon = new EventEmitter();
  latlon:any=[]

  ngOnInit(): void {
  }

  map:any;

  initMap(): void {
  this.map = L.map('map').setView([ 14.0650, -87.1715 ],10)

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);

  let marker;
  this.map.on('click', (e) => {
    if (marker) {
      this.map.removeLayer(marker);
    }
    this.latlon = [e.latlng.lat, e.latlng.lng];
    this.onLatLon.emit(this.latlon)
    marker = L.circleMarker(this.latlon, {
      draggable: true,
      bounceOnAdd: true,
    })
      .addTo(this.map)
    }
  )
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
