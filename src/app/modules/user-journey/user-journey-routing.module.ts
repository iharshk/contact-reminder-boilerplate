import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserJourneyComponent } from './user-journey.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserJourneyComponent,
    children:[
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        data: { title: "Welcome" },
        component: LandingComponent
      },
      {
        path: 'signup',
        data: { title: "Sign-Up" },
        component: SignupPageComponent
      },
      {
        path: 'login',
        data: { title: "Log-In" },
        component: LoginPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserJourneyRoutingModule { }
