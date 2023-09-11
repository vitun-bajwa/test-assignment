import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from './core/services/common.service';
import { Router } from '@angular/router';
import { RoleService } from './core/services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'test-assignment';
  constructor(private commonServices: CommonService, private router: Router, private role: RoleService) { }
  submits: any = []
  logout(): void {
    this.commonServices.removeCredencials()
    this.router.navigate(['/login'])
    // this.submits=[]
  }

  ngOnInit(): void {

  }

  // role based app project
  isMenuRequire = false;
  isAdmin = false;
  ngDoCheck() {
    let currentURL = this.router.url;
    if (currentURL === '/role/logins' || currentURL === '/role/register') {
      this.isMenuRequire = false;
    } else {
      this.isMenuRequire = true;
    }
    if (this.role.getUserRole() === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false
    }
  }
}
