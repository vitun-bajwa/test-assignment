import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { ParamsComponent } from './components/params/params.component';
import { Params2Component } from './components/params2/params2.component';
import { GetdataComponent } from './components/getdata/getdata.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from '../core/pipe/search.pipe';


@NgModule({
  declarations: [
    ParamsComponent,
    Params2Component,
    GetdataComponent,
    DialogComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    QueryRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: {} },
	],
  exports:[SearchPipe]
})
export class QueryModule { }
