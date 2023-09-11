import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  storageData: any;
  @Output() sendEvent = new EventEmitter();
  @Input() sendValue: any;

  ngOnInit(): void {}

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

  herose = [
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

  login = [
    {
      id: 11,
      name: 'nice',
    },
    {
      id: 12,
      name: 'dynama',
    },
    {
      id: 13,
      name: 'iq',
    },
    {
      id: 14,
      name: 'magma',
    },
    {
      id: 15,
      name: 'tornado',
    },
  ];

  admin = [
    {
      id: 16,
      name: 'javascript',
    },
    {
      id: 17,
      name: 'java',
    },
    {
      id: 18,
      name: 'python',
    },
    {
      id: 19,
      name: 'angular',
    },
    {
      id: 20,
      name: 'sql',
    },
  ];

  contact = [
    {
      id: 21,
      name: 'php',
    },
    {
      id: 22,
      name: 'react',
    },
    {
      id: 23,
      name: 'springboot',
    },
    {
      id: 24,
      name: 'ui',
    },
    {
      id: 25,
      name: 'ux',
    },
  ];



  allArray = [
    this.crisesCenter,
    this.herose,
    this.admin,
    this.login,
    this.contact,
  ];

  onClick(index: number) {
    this.sendEvent.emit(this.allArray[index]);
  }
}
