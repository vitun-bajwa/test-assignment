import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat: number = 30.733315;
  lng: number = 76.779419;
  constructor() { }

  ngOnInit(): void {
  }

}
