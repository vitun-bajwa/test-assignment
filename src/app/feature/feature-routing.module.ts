import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InputSettingsComponent } from './components/input-settings/input-settings.component';
import { ResolveResolver } from '../core/guards/resolve.resolver';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SinaturePadComponent } from './components/sinature-pad/sinature-pad.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TabComponent } from './components/tab/tab.component';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatTabGroupComponent } from './mat-tab-group/mat-tab-group.component';

const routes: Routes = [
  {
    path:'dashboard',component: DashboardComponent
  },
  // {
  //   path:'' ,component:HomePageComponent
  // }
  // ,
  // {
  //   path:'input',component:InputSettingsComponent
  // },
  // {
  //   path:'',component:AboutComponent
  // },
  // {
  //   path: 'users', component: UserComponent, resolve: { users: ResolveResolver }
  // },
  // {
  //   path:'',component:ContactComponent
  // },
  // {
  //   path:'profile',component:ProfileComponent
  // },
  // {
  //   path:'details',component:DetailsComponent,
  //   children:[
  //     {
  //       path:'userDetails',component:UserDetailsComponent
  //     }
  //   ]
  // },
  // {
  //   path:'dashboard',component:DashboardComponent,

  //   children:[
  //     {path:'setting',component:SettingComponent},
  //     {
  //       path:'profile',component:ProfileComponent
  //     },
  //     {
  //       path:'userDetails',component:UserDetailsComponent
  //     }
  //   ]
  // },
  // {
  //   path:'',component:SinaturePadComponent
  // }

  // {
  //   path:'',component:HeaderButtonComponent
  // },
  // {
  //   path:'main',component:MainContentComponent
  // }
  {
    path:'',component:TabComponent,
    children:[
      {
        path:'cri',component:CrisisCenterComponent
      },
      {
        path:'hero',component:HeroesComponent
      },
      {
        path:'admin',component:AdminComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'contacts',component:ContactsComponent
      }
    ]
  },

{
  path: 'mat',component:MatTabGroupComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
