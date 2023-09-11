import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private http: HttpClient) { }
  baseUrl = 'https://dummyjson.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
    }),
  };

  getData(path:string){
    debugger
    console.log(`${this.baseUrl}${path}`);
    return this.http.get(`${this.baseUrl}${path}`,this.httpOptions)
  }
}
