import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public builder:FormBuilder,
    public toastr:ToastrService,
    public role:RoleService,
    public route:Router)
    { }

  ngOnInit(): void {
  }
  registerForm = this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    password:this.builder.control('',Validators.compose([Validators.required,
    Validators.pattern('[a-zA-Z][a-zA-Z ]+')])),
    emails:this.builder.control('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_|\\\\#~`=?$^!{}+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}$')]),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  })

  registration(){
    if(this.registerForm.valid){
      this.role.registerData(this.registerForm.value).subscribe((res:any) => {
        this.toastr.success('Please Contact Admin for enable to access User','registration Successfull');
        this.toastr.success('Sucessfully Registered','Success');
        this.route.navigate(['/role/logins'])
      })
    }else{
      this.toastr.warning('please enter valid data')
    }
  }

}
