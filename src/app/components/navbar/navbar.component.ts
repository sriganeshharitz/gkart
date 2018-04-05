import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppUser} from '../../models/app-user';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  constructor(public auth: AuthService, private router: Router) {
    this.auth.appUser$.subscribe(
      (value) => {
        this.appUser = value;
      }
    );
  }
  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
}
