import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase';
import {User} from "firebase/app";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from './user.service';
import {AppUser} from '../models/app-user';
import {of} from 'rxjs/observable/of';
@Injectable()
export class AuthService {
  user$: Observable<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) {
    console.log('inside constructor of auth setvice');
    this.user$ = this.afAuth.authState;
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl || '/');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut().then(
      (value) => {
        this.router.navigateByUrl('');
      },
      reason => {
        this.router.navigateByUrl('/dsads');
      }
    ).catch(
      reason => this.router.navigateByUrl('/blah')
    );
  }
  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(
      (value: User) => {
        if (value) {
          return this.userService.get(value.uid);
        } else {
          return Observable.of(null);
        }
      }
    );
  }
}
