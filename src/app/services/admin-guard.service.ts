import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {User} from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {AppUser} from '../models/app-user';

@Injectable()
export class AdminGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.appUser$.map(
      (value: AppUser) => {
        return value.isAdmin;
      }
    );
  }

  constructor(private auth: AuthService, private userService: UserService) { }

}
