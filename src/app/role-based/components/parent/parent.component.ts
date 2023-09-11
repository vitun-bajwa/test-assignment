import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedProduct: any=[];
  constructor() { }

  ngOnInit(): void {
   let products = [
      { name: 'Rice', id: 1, price: 200 },
      { name: 'Beans', id: 2, price: 300 },
      { name: 'Bananna', id: 3, price: 400 },
    ];
  }

  onSelectedProduct(product:any) {
    this.selectedProduct = [product];
  }



}
