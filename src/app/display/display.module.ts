import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRoutingModule } from './display-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { LeadsComponent } from './Leads/leads.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    LeadsComponent,
    VendorsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  exports: [LeadsComponent,VendorsComponent,StudentsComponent]
})
export class DisplayModule { }
