import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {User} from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AppUser} from '../models/app-user';

@Injectable()
export class UserService {

  constructor(
    private db: AngularFireDatabase
  ) { }
  save(user: User) {
    this.db.object('/users/' + user.uid).update(
      {
        email: user.email,
        name: user.displayName
      }
    );
  }
  get(uid: string): Observable<AppUser> {
    return this.db.object<AppUser>('/users/' + uid).valueChanges();
  }
}
