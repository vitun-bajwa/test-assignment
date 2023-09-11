import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  storage:any
  constructor() { }

  ngOnInit(): void {
  }
  onCenter(ev:any){
    console.log(">>>>>>>",ev);
    this.storage = ev;
  }

}
