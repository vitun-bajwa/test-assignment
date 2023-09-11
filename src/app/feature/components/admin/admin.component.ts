import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() admins = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.admins.emit(this.admin)
  }
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

}
