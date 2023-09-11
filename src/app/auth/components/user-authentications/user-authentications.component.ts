import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'console';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-user-authentications',
  templateUrl: './user-authentications.component.html',
  styleUrls: ['./user-authentications.component.css']
})
export class UserAuthenticationsComponent implements OnInit {
  user: any;
  form!: FormGroup;
  data: any;
  submits: any = [];
  constructor(private authService: AuthService, private commonService: CommonService, private formBuilder: FormBuilder, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    debugger
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });

  }
  onSubmit() {
    debugger
    if (this.form.value.email === 'v@gmail.com' && this.form.value.password === 'vitun') {
      debugger
      this.form.reset()
      this.getLoginDetails();
      this.http.get('https://dummyjson.com/products').subscribe((res)=>{
        console.log(res);
      })
    }
    else {
      // alert('invalid credentials')
      this.form.reset()
    }
  }

  getLoginDetails() {
    this.authService.roleBasedUser().subscribe((res: any) => {
      debugger;
      this.commonService.setCredencials(JSON.stringify(res));
      this.router.navigate(['feature/dashboard'])
    });
  }
}
