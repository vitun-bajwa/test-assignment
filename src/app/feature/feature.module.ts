import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InputSettingsComponent } from './components/input-settings/input-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ResolveResolver } from '../core/guards/resolve.resolver';
import { UserComponent } from './components/user/user.component';
import { FakeAPIService } from '../core/services/fake-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { SinaturePadComponent } from './components/sinature-pad/sinature-pad.component';
// import { SignaturePadModule } from '@angular/ng-plus/signature-pad'
import { SignaturePadModule } from 'angular2-signaturepad';
import { SettingComponent } from './components/setting/setting.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component'
import { AuthGuard } from '../core/guards/auth.guard';
import { CommonService } from '../core/services/common.service';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TabComponent } from './components/tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomePageComponent,
    InputSettingsComponent,
    UserComponent,
    AboutComponent,
    ProfileComponent,
    ContactComponent,
    SinaturePadComponent,
    SettingComponent,
    DetailsComponent,
    DashboardComponent,
    UserDetailsComponent,
    HeaderButtonComponent,
    MainContentComponent,
    CrisisCenterComponent,
    HeroesComponent,
    AdminComponent,
    LoginComponent,
    ContactsComponent,
    TabComponent,

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    SignaturePadModule,
    MatTabsModule
  ],
  providers: [ ResolveResolver,FakeAPIService,AuthGuard,CommonService],
})
export class FeatureModule { }
