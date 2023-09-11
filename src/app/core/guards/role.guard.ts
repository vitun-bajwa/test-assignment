import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public toastr: ToastrService,
    public role: RoleService,
    public route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.role.isLoggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu == 'list') {
          if (this.role.getUserRole() == 'admin') {
            return true
          } else {
            this.toastr.warning("You don't have Access this Data.","Warning")
            this.route.navigate([''])
            return false
          }
        }
        else {
          return true
        }
      } else {
        return true
      }
    } else {
      this.route.navigate(['/role/logins']);
      return false
    }
    if (this.role.isLoggedIn()) {
      return true;
    }
    else {
      this.route.navigate(['/logins']);
      return false
    }
  }

}
