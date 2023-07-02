import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent} from './Leads/leads.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
    {path: '',redirectTo: 'leads',pathMatch: 'full'},
    {path: 'vendors',component: VendorsComponent},
    {path: 'leads',component: LeadsComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DisplayRoutingModule {}