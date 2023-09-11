import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  API = environment.baseAPI;
  RoleAPI = environment.baseAPIRole
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.API);
  }

  getById(id: any) {
    return this.http.get(this.API +'/' + id)
  }

  registerData(inputData: any) {
    return this.http.post(this.API, inputData)
  }

  updateData(id:any, inputData: any) {
  return  this.http.put(this.API+'/' + id, inputData)
  }

  isLoggedIn(){
    return sessionStorage.getItem('username') != null
  }

  getUserRole(){
    return sessionStorage.getItem('role') != null? sessionStorage.getItem('role')?.toString():'';
  }

  getAllRole(){
    return this.http.get(this.RoleAPI)
  }
}
