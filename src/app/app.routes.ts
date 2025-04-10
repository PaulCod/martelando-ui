import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { MakeOfferComponent } from './pages/make-offer/make-offer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { AuthRedirectGuard } from './guards/auth-redirect.guard';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthRedirectGuard]
  },
  {
    path: "makeoffer",
    component: MakeOfferComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthRedirectGuard]
  },
  {
    path: "create-product",
    component: CreateProductComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "my-products",
    component: MyProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
