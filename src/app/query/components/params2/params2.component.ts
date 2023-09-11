import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params2',
  templateUrl: './params2.component.html',
  styleUrls: ['./params2.component.css']
})
export class Params2Component implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.getUrlData();
    this.getParams()
   }

  ngOnInit(): void {
  }
 getUrlData(){
  debugger
 this.activateRoute.paramMap.subscribe((res)=>{
    let data =  res.get('id');
    console.log(data);
   })
 }
 getParams(){
  debugger
  this.activateRoute.queryParamMap.subscribe(params => console.log({params}));
 }
}
