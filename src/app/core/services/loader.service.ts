import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();

  constructor() {
  }

  show() {
    debugger
     this.isLoading.next(true);
  }

  hide() {
    debugger
     this.isLoading.next(false);
  }
}
