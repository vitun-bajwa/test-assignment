import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {
  @Output() crisis = new EventEmitter();

  title:any = 'Crisis Center';
  constructor() { }

  ngOnInit(): void {
    this.crisis.emit(this.crisesCenter)
  }
  crisesCenter = [

    {
      id: 1,
      name: 'admin',
    },
    {
      id: 2,
      name: 'john',
    },
    {
      id: 3,
      name: 'gold',
    },
    {
      id: 4,
      name: 'silver',
    },
    {
      id: 5,
      name: 'platinum',
    },
];
  // onClick(index: number) {
  //   this.sendEvent.emit(this.allArray[index]);
  // }
}
