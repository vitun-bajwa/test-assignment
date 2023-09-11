import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/core/services/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  products:any= [];
  constructor(private api_service: DummyService) { }

  ngOnInit() {
    this.api_service.addUser().subscribe((productdata:any) =>{
      this.products = [...productdata]
      })
  }

}
