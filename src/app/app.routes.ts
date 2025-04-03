import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { MakeOfferComponent } from './pages/make-offer/make-offer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "makeoffer",
    component: MakeOfferComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
