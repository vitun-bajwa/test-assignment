import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }
  addUser(){
     return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
