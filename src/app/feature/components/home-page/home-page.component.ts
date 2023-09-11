import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loginControlNames } from 'src/app/core/enums/enums';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  form!: FormGroup;
  loginControlNames: any = loginControlNames;
  constructor(public fb: FormBuilder, public service: ValidationService) { }
  disabled:any
  ngOnInit(): void {
    this.form = this.fb.group({
        firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z. ]+$'), Validators.minLength(2)]]
      }
    )
  }

  getValidator(value: any) {
    return this.service.getErrorValidatonMessages(value, this.form)
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }

  onOut(event: boolean): void {
    debugger
    this.disabled = event;
  }
}
