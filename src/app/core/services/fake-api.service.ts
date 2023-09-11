import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {

  https = new HttpHeaders({
    contentType: 'application/json',
    set: 'application/json'
  })

  // params = new HttpParams()
  // .set('page', PageNo)
  // .set('sort', SortOn)

  constructor(private http: HttpClient) { }
  usersEndpoint = "https://jsonplaceholder.typicode.com/users";
  getUsers(): Observable<any> {
    return this.http.get(this.usersEndpoint);
}
}
