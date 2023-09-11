import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, empty, of } from 'rxjs';
import { FakeAPIService } from '../services/fake-api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveResolver implements Resolve<boolean> {
  constructor(private fakeApi: FakeAPIService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fakeApi.getUsers().pipe(
      catchError((error) => {
      return empty();
      })
    )
  }
}



