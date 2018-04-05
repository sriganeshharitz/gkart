import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$.map(
      (user) => {
        if (user) {
          return true;
        } else {
          let returnUrl = state.url;
          this.router.navigate(['/login'],{queryParams: {'returnUrl': returnUrl}});
          // this.router.navigateByUrl('/login');
          return false;
        }
      }
    );
  }
}
