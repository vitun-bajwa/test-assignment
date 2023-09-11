import { Injectable } from '@angular/core';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class TableFunctionService {


  constructor(private httpProvider:TableService) { }


  getProducts(){
    let url = 'products';
    return this.httpProvider.getData(url);
  }
}
