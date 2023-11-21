import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptchaComponent } from './components/captcha/captcha.component';

const routes: Routes = [
  {
    path:'',component:CaptchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaptchaRoutingModule { }
