import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResolveResolver } from './core/guards/resolve.resolver';
import { FeatureModule } from './feature/feature.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './core/interceptor/request.interceptor';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NewsapiService } from './core/services/newsapi.service'
//import { TabFunctionalityModule } from './tab-functionality/tab-functionality.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ResolveResolver, AuthGuard,UnauthGuard, NewsapiService

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
