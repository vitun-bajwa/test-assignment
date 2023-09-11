import { Injectable } from '@angular/core';
import { loginControlNames } from '../enums/enums';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  getErrorValidatonMessages(value: any, form: any) {
    if (value == loginControlNames.firstname) {
      return form.controls[loginControlNames.firstname].hasError('required') ? 'Field is required' :
        form.controls[loginControlNames.firstname].hasError('minlength') ? 'Not a valid min length' :
          form.controls[loginControlNames.firstname].hasError('pattern') ? 'enter only characters' :
            form.controls[loginControlNames.firstname].hasError('maxlength') ? 'Not a valid max length' : '';
    }
    else if (value == loginControlNames.lastname) {
      return form.controls[loginControlNames.lastname].hasError('required') ? 'Field is required' :
        form.controls[loginControlNames.lastname].hasError('minlength') ? 'Not a valid min length' :
          form.controls[loginControlNames.lastname].hasError('pattern') ? 'enter only characters' :
            form.controls[loginControlNames.lastname].hasError('maxlength') ? 'Not a valid max length' : '';
    }
    else if (value == loginControlNames.email) {
      return form.controls[loginControlNames.email].hasError('required') ? 'Field is required' :
        form.controls[loginControlNames.email].hasError('minlength') ? 'Not a valid min length' :
          form.controls[loginControlNames.email].hasError('pattern') ? 'enter only characters' :
            form.controls[loginControlNames.email].hasError('maxlength') ? 'Not a valid max length' : '';
    }
    else if (value == loginControlNames.password) {
      return form.controls[loginControlNames.password].hasError('required') ? 'Field is required' :
        form.controls[loginControlNames.password].hasError('minlength') ? 'Not a valid min length' : '';
    }
    else if (value == loginControlNames.confirmPassword) {
      return form.controls[loginControlNames.confirmPassword].hasError('required') ? 'Field is required' :
        form.controls[loginControlNames.confirmPassword].hasError('minlength') ? 'Not a valid min length' : '';
    }
    else return
  }
}
