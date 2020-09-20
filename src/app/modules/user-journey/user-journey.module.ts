import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserJourneyRoutingModule } from './user-journey-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserJourneyComponent } from './user-journey.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [UserJourneyComponent, LandingComponent, SignupPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    UserJourneyRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UserJourneyModule { }
