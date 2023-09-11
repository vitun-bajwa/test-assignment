import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserlistingComponent } from './components/userlisting/userlisting.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UpdatepopupComponent } from './components/updatepopup/updatepopup.component';
import { RoleGuard } from '../core/guards/role.guard';
import { FilterComponent } from './components/filter/filter.component';
import { ForeachComponent } from './components/foreach/foreach.component';
import { FindComponent } from './components/find/find.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'logins',component:LoginComponent
  },
  {
    path:'list',component:UserlistingComponent,
  },
  {
    path:'popup',component:UpdatepopupComponent
  },
  {
    path:'filter',component:FilterComponent
  },
  {
    path:'forEach',component:ForeachComponent
  },
  {
    path:'find',component:FindComponent
  },
  {
    path:'parent',component:ParentComponent
  },
  {
    path:'child',component:ChildComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleBasedRoutingModule { }
