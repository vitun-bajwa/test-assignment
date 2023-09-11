import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CommonInputComponent } from './components/common-input/common-input.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { CommonInputComponent } from './components/common-input/common-input.component';


const apis =[
  ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
  }),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    // MatSortModule
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule
]

@NgModule({
  declarations: [
    CommonInputComponent,
    ButtonComponent,
    ButtonsComponent,
    InputComponent,
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    // InputComponent,
    apis
  ],
  exports:[
    apis,
    CommonInputComponent,
    CommonTableComponent
  ],
  providers:[

  ]
})
export class SharedModule { }
