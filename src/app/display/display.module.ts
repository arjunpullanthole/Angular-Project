import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRoutingModule } from './display-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { LeadsComponent } from './Leads/leads.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DisplayComponent } from './display/display.component';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    LeadsComponent,
    VendorsComponent,
    StudentsComponent,
    AddStudentsComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    MatTabsModule
  ],
  exports: [LeadsComponent,VendorsComponent,StudentsComponent,AddStudentsComponent,DisplayComponent]
})
export class DisplayModule { }
