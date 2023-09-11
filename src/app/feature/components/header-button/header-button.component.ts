import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent implements OnInit {

  storageData: any;
  constructor() { }

  ngOnInit(): void {
  }

  allData(ev: any){
    this.storageData = ev;
  }
}
