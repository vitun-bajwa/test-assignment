import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }
  storage: any;
  ngOnInit(): void {
  }

  show(event: any) {debugger
    this.storage = event
  }
  crisis(event: any) {
    this.storage = event
  }
  admin(event: any) {
    this.storage = event
  }
  login(event: any) {
    this.storage = event
  }
  contact(event: any) {
    this.storage = event
  }

}
