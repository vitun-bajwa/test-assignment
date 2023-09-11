import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { UserAuthenticationsComponent } from './components/user-authentications/user-authentications.component';
import { DragcComponent } from './components/dragc/dragc.component';
import { TableComponent } from './components/table/table.component';
import { DummyComponent } from './components/dummy/dummy.component';

const routes: Routes = [
  // {
  //   path: 'login', component: UserAuthenticationsComponent
  // },
  // {
  //   path: 'he', component: ButtonComponent
  // }
  // {
  //   path:'',component:DragcComponent
  // },
  {
    path: 'login',component: LoginComponent
  },
  {
    path:'table',component: TableComponent
  },
  {
    path: 'dummy',component:DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
