import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ucs2 } from 'punycode';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {
  roleList: any;
  editData: any
  constructor(
    private builder: FormBuilder,
    private role: RoleService,
    public toastr: ToastrService,
    public dialogref: MatDialogRef<UpdatepopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.role.getAllRole().subscribe((res:any)=>{
      this.roleList = res;
    })
    if(this.data.usercode != null && this.data.usercode != ''){
      this.loadUserData(this.data.usercode)
    }
  }

  registerForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    emails: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('',Validators.required),
    isActive: this.builder.control(false)
  });

  loadUserData(code: any) {
    this.role.getById(code).subscribe((res: any) => {
      this.editData = res;
      console.log(this.editData);

      this.registerForm.setValue({
        id: this.editData.id, name: this.editData.name,
        password: this.editData.password, email: this.editData.email, gender: this.editData.gender,
        roles: this.editData.role, isActive: this.editData.isActive
      })
    })
  }

  updateUser(){
    if (this.registerForm.valid) {
      this.role.updateData(this.registerForm.value.id, this.registerForm.value).subscribe((res: any) => {
        this.toastr.success("Update Successfull :)", "Success");
        this.dialogref.close()
      })
    }else{
      this.toastr.warning("Please Select Role for user", "Warning");
    }
  }
}
