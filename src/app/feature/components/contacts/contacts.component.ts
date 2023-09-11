import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Output() contacts = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.contacts.emit(this.contact)
  }
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

}
