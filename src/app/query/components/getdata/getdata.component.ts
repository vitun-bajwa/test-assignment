import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
})
export class GetdataComponent implements OnInit {
  columns = ['id', 'name', 'email', 'username'];
  storage: any[] = [];
  saveId: any;
  value = new FormControl('');
  searchText: String = '';

  constructor(
    public dialog: MatDialog,
    private service: DialogService,
    private _fb: FormBuilder
  ) {}

  search(event: any) {
      this.value.valueChanges.pipe(debounceTime(1000)).subscribe((res: any) => {
      debugger;
      this.searchText = res;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getId().subscribe((data: any) => {
      this.storage = data;
    });
  }

  openDialog(data: any): void {
    debugger;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      maxWidth: '50vw',
      height: '400px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((res: any) => {});
  }
  
  numberOfClicks = 0;
  @HostListener('click', ['$event.target'])
  onClick(btn:any) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}
