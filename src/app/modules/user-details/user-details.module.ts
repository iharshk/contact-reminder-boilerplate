import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { SaveContactsComponent } from './components/save-contacts/save-contacts.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  declarations: [UserDetailsComponent, SaveContactsComponent, ViewContactsComponent, SummaryComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [SummaryComponent],
})
export class UserDetailsModule { }
