import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../core/services/validation.service'
import { loginControlNames } from 'src/app/core/enums/enums';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // ngOnInit(): void {

  // }
  constructor(private fb: FormBuilder, public validationService:ValidationService ) { }
  form!: FormGroup;
  disabled:any
  loginControlNames:any = loginControlNames;
  ngOnInit() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.form = this.fb.group(
      {
        firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z. ]+$'), Validators.maxLength(5), Validators.minLength(3)]),
        lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z. ]+$'), Validators.maxLength(5), Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.pattern(emailregex)]),
        password: new FormControl('', [Validators.required,]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
    )
  }
  getErrorValidator(value: any) {
    debugger
  return this.validationService.getErrorValidatonMessages(value , this.form)
  }

 validation(value:any){
  return this.getErrorValidator(value);
 }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      alert('Your input Form has been submitted')
      this.form.reset()
    }
    else {
    }
  }
}
