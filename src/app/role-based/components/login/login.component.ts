import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any;
  constructor(
    public builder:FormBuilder,
    public toastr:ToastrService,
    public role:RoleService,
    public route:Router){
      sessionStorage.clear()
    }

  ngOnInit(): void {
  }

  loginForm = this.builder.group({
    username:this.builder.control('',([Validators.required,Validators.minLength(5)])),
    password:this.builder.control('',([Validators.required])),
  })

  login(){
    if(this.loginForm.valid){
      this.role.getById(this.loginForm.value.username).subscribe((res:any) => {
      this.userData = res;
      console.log(this.userData);
      if(this.userData.password === this.loginForm.value.password){
        debugger
        this.toastr.success('Sucessfully logged in','Success')
        if(this.userData.isActive){
          sessionStorage.setItem('username', this.userData.id);
          sessionStorage.setItem('role', this.userData.role);
          this.route.navigate(['']);
        }else{
          this.toastr.error('Please Contact To Admin! :)','In Active User!!');
        }
      }else{
        this.toastr.error('Invalid Credentials','Please Valid Credentials');
      }
    })
    }else{
      this.toastr.warning('Please Enter valid Data','Error');
    }
  }

}
