import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptchaRoutingModule } from './captcha-routing.module';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxCaptchaModule } from 'ngx-captcha'
import { RecaptchaModule } from 'ng-recaptcha'
@NgModule({
  declarations: [
    CaptchaComponent
  ],
  imports: [
    CommonModule,
    CaptchaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RecaptchaModule
  ]
})
export class CaptchaModule { }
