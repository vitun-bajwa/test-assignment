import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
  
    SortPipe
  ],
  imports: [
    HttpClientModule,
  ],
})
export class AuthModule { }
