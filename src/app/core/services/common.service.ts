import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

    setCredencials(value:any){
  localStorage.setItem("creds", value);
  }

  getCredencials(){debugger
    let data :any = localStorage.getItem('creds');
    return JSON.parse(data)
  }

  removeCredencials(){
    localStorage.removeItem('creds');
  }
}
