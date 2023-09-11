import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


  storage:any;
  constructor() { }

  ngOnInit(): void {
  }
  onCenter(ev:any){
    console.log(">>>>>>>",ev);
    this.storage = ev;
  }

}
