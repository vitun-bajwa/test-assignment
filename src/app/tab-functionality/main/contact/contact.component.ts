import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

storage:any
  constructor() { }

  ngOnInit(): void {
  }
  onCenter(ev:any){
    console.log(">>>>>>>",ev);
    this.storage = ev;
  }


}
