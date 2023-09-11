import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public route: Router,
    private commonService: CommonService,) { }
  // user: any;
  // rolebased: any[] = [];

  authenticate = [
    {
      name: 'profile',
      role: 'admin    '
    },
    {
      name: 'setting',
      role: 'admin'
    },
    {
      name: 'userDetails',
      role: 'user '
    }
  ]

  ngOnInit(): void {
    debugger
    let data = this.commonService.getCredencials();
    this.authenticate = this.authenticate.filter(x => {
      return x.role.trim() === data.role
    });
  }
}
