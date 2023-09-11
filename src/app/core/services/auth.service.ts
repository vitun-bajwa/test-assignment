import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, of } from 'rxjs';

const AUTH_API = 'https://jsonplaceholder.typicode.com/posts';
const token = "dsahdewfhwehd2323knckdsjk"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

   subject = new Subject<any>();

  refreshToken() {
    // localStorage.setItem('authToken', token)
    // return this.http.post(token + 'refreshtoken', {refreshToken: token}, httpOptions);
    return of(token);
  }
  roleBasedUser() {
    return of({
      role: 'admin',
      token:'tygukhiljortygjuhkilj'
   });
  }
  roleBasedAdmin() {
    return of({ role: 'admin' });
  }
}
