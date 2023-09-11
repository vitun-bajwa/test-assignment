import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

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
