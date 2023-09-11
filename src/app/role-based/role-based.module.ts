import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleBasedRoutingModule } from './role-based-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserlistingComponent } from './components/userlisting/userlisting.component';
import { UpdatepopupComponent } from './components/updatepopup/updatepopup.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { ForeachComponent } from './components/foreach/foreach.component';
import { FindComponent } from './components/find/find.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    FilterComponent,
    ForeachComponent,
    FindComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    RoleBasedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class RoleBasedModule { }
