import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() type!: string;
  @Input() control!: any;
  @Input() name!: any;
  @Input() placeholder!: any;
  @Input() form!: FormGroup;
  @Input() error:any;

  constructor() { }

  ngOnInit(): void {
  }
}
