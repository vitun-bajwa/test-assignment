import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { MapsComponent } from './components/maps/maps.component';


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapRoutingModule
  ]
})
export class GoogleMapModule { }
