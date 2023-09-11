import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CrisisCenterComponent } from './main/crisis-center/crisis-center.component';
import { HeroesComponent } from './main/heroes/heroes.component';
import { AdminComponent } from './main/admin/admin.component';
import { AuthenticationComponent } from './main/authentication/authentication.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
  },
  {
    path: 'crisis', component: CrisisCenterComponent
  },
  {
    path: 'hero', component: HeroesComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFunctionalityRoutingModule { }
