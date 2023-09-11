import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logins = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.logins.emit(this.login)
  }
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
}
