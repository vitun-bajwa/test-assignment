import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Output() hero = new EventEmitter();

  herose :any = [
    {
      id: 6,
      name: 'narco',
    },
    {
      id: 7,
      name: 'bombasto',
    },
    {
      id: 8,
      name: 'celeritas',
    },
    {
      id: 9,
      name: 'magneta',
    },
    {
      id: 10,
      name: 'rubberman',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.hero.emit(this.herose)
  }
}
