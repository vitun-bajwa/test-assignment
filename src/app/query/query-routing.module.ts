import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamsComponent } from './components/params/params.component';
import { Params2Component } from './components/params2/params2.component';
import { GetdataComponent } from './components/getdata/getdata.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  {
    path:'param1',component:ParamsComponent
  },
  {
    path:'main2/:id',component:Params2Component
  },
  {
    path:'get',component:GetdataComponent,
    children:[
      {
        path:'EmpDetail/:id',component:DialogComponent,
      },
    ]
  },
  {
    path:'',redirectTo:'get',pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
