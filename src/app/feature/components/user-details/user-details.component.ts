import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userDetails =[
    {
      "id":1,
      "name": "John",
      "email": "john@example.com"
    },
    {
      "id":2,
      "name": "John",
      "email": "john@example.com"
    }]

}
