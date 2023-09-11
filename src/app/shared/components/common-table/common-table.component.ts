import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})

export class CommonTableComponent implements OnInit, OnChanges{

  @Input() data: any

  ngOnInit(): void {

  }
  public cols:any=[];
  ngOnChanges(Changes:SimpleChanges){
    this.cols = Changes['data'].currentValue
    console.log('this.cols:', this.cols)
    this.cols = this.cols ? Object.keys(this.cols[0]) : []

  }
  }

