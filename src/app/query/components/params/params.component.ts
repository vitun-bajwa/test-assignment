import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  constructor(private route: Router, private active: ActivatedRoute) { }
  edit: any
  ngOnInit(): void {

  }

  onClick() {
    let data: any = {
      editMode: true,
      category: 'query',
      dataa: [
        {
          editMode: true,
          category: 'query',
        }
      ]
    }
    this.route.navigate(['/query/main2/2'], { queryParams: data });
  }
}


