import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClickEvent = new EventEmitter<string>() ;
  @Input() disabled: any

  constructor() { }

  ngOnInit(): void {
  }

  form!: FormGroup;

  save(){
    this.btnClickEvent.emit('click');
  }


}
