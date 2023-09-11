import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserAuthenticationsComponent } from './components/user-authentications/user-authentications.component';
import { AuthInterceptor } from '../core/interceptor/auth.interceptor';
import { DragcComponent } from './components/dragc/dragc.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderInterceptor } from '../core/interceptor/loader.interceptor';


@NgModule({
  declarations: [
    LoginComponent,
    UserAuthenticationsComponent,
    DragcComponent,
    TableComponent,
    DummyComponent,
    LoaderComponent,
    // SharedModule
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule,
    MatProgressSpinnerModule
    // CdkDropList,
    // CdkDrag
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ]
})
export class AuthModule { }
