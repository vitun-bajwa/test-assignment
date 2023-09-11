import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabFunctionalityRoutingModule } from './tab-functionality-routing.module';
import { MainComponent } from './main/main.component';
import { CrisisCenterComponent } from './main/crisis-center/crisis-center.component';
import { AuthenticationComponent } from './main/authentication/authentication.component';
import { ContactComponent } from './main/contact/contact.component';
import { AdminComponent } from './main/admin/admin.component';
import { HeroesComponent } from './main/heroes/heroes.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MainComponent,
    CrisisCenterComponent,
    AuthenticationComponent,
    ContactComponent,
    AdminComponent,
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    TabFunctionalityRoutingModule,
    MatButtonModule
  ]
})
export class TabFunctionalityModule { }
