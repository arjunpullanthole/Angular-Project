import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRoutingModule } from './display-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { LeadsComponent } from './Leads/leads.component';



@NgModule({
  declarations: [
    LeadsComponent,
    VendorsComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  exports: [LeadsComponent,VendorsComponent]
})
export class DisplayModule { }
