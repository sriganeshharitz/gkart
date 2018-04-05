import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ClarityModule} from "@clr/angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "../routes";
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule, FirebaseAppConfigToken} from "angularfire2";
import {environment} from "../environments/environment";
import { AuthService } from './services/auth.service';
import {AuthGuardService} from "./services/auth-guard.service";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {UserService} from "./services/user.service";
import { AdminGuardService } from './services/admin-guard.service';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import {CategoryService} from './services/category.service';
import {FormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {CustomFormsModule} from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    NotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
