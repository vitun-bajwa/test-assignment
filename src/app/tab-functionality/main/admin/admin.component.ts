import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  storage:any
  constructor() { }

  ngOnInit(): void {
  }
  onCenter(ev:any){
    console.log(">>>>>>>",ev);
    this.storage = ev;
  }

}
