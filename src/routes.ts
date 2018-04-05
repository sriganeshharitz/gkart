import {Routes} from "@angular/router";
import {HomeComponent} from "./app/components/home/home.component";
import {LoginComponent} from "./app/components/login/login.component";
import {ProductsComponent} from "./app/components/products/products.component";
import {MyOrdersComponent} from "./app/components/my-orders/my-orders.component";
import {CheckOutComponent} from "./app/components/check-out/check-out.component";
import {OrderSuccessComponent} from "./app/components/order-success/order-success.component";
import {AdminProductsComponent} from "./app/components/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./app/components/admin/admin-orders/admin-orders.component";
import {ShoppingCartComponent} from "./app/components/shopping-cart/shopping-cart.component";
import {NotFoundComponent} from "./app/components/not-found/not-found.component";
import {AuthGuardService} from "./app/services/auth-guard.service";
import {AdminGuardService} from './app/services/admin-guard.service';
import {ProductFormComponent} from './app/components/admin/product-form/product-form.component';


export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path: '**', component: NotFoundComponent}
];
