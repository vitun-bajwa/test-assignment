import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  storage:any
  // URL :any = environment.baseUrl
  api = 'http://localhost:3000/add'
  constructor(private http:HttpClient) { }
  getId():any{
   return this.http.get(this.api)
  }

}
