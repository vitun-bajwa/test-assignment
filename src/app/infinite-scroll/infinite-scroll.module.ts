import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfiniteScrollRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ]
})
export class InfiniteScrollModule { }
