import { Component, OnInit } from '@angular/core';
import { TableFunctionService } from 'src/app/core/services/table-function.service';
import { TableService } from 'src/app/core/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private productsService: TableFunctionService) { }
  data!:any


  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res: any) => {
        let products =
         res.products
        this.data = products;
      }
    })
  }


}
