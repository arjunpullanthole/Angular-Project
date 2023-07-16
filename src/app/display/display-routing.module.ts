import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent} from './Leads/leads.component';
import { VendorsComponent } from './vendors/vendors.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
    {path: '',redirectTo: 'leads',pathMatch: 'full'},
    {path: 'vendors',component: VendorsComponent},
    {path: 'leads',component: LeadsComponent},
    {path: 'students',component: StudentsComponent},
    {path: 'add-students',component:AddStudentsComponent},
    {path: 'tabs',component:DisplayComponent}

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DisplayRoutingModule {}