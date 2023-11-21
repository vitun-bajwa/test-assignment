import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { loginControlNames } from 'src/app/core/enums/enums';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  captcha!: string;
  email!: string;
  public aFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.captcha = '';
    this.email = 'vitunbajwa10@gmail.com';
  }

  ngOnInit() {
    // this.aFormGroup = this.formBuilder.group({
    //   recaptcha: ['', Validators.required]
    // });
  }
  siteKey:string = '6LdPVxUpAAAAAMRHqkLNgrnND8_iBttNwB0TGZV_'

  resolved(captchaResponse:string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
    
  }
}
