import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'main', component: ShopComponent,
    children:[
      {
        path:'setting',component:SettingComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
