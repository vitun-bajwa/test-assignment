import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    // canActivate: [UnauthGuard]
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab-functionality/tab-functionality.module').then(m => m.TabFunctionalityModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  // { path: '', pathMatch: 'full', redirectTo: 'query' },
  {
    path: 'query',
    loadChildren: () => import('./query/query.module').then(m => m.QueryModule),
  },
  {
    path:'role',
    loadChildren: () => import('./role-based/role-based.module').then(m =>m.RoleBasedModule)
  },
  {
    path:'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m =>m.RxjsModule)
  },
  {
    path:'captcha',
    loadChildren: () => import('./captcha/captcha.module').then(m =>m.CaptchaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
