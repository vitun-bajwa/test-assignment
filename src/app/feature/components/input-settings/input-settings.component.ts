import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-input-settings',
  templateUrl: './input-settings.component.html',
  styleUrls: ['./input-settings.component.css']
})
export class InputSettingsComponent implements OnInit {
  @Input() icon!: string;
  @Input() type!: string;
  @Input() control!: any;
  @Input() label!: string;
  @Input() name!: any;
  @Input() placeholder!: any;
  @Input() form!: FormGroup;
  @Input() value: boolean = false;

  @Output() valueChange = new EventEmitter()

  testing: any;
  constructor(public service: ValidationService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.valueChange.emit(false);
    })
  }

  test() {
    this.testing = {
      ram: 'hello'
    };

    this.testing.ram = 'bye';
  }

}
