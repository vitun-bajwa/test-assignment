import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() productList = [];
  @Output() onSelected = new EventEmitter<any>();

  onSelectedProduct(product:any) {
    console.log(product);
    this.onSelected.emit(product);
  }
}
