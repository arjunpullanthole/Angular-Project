import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EntriesComponent } from './entries/entries.component';
import { NavigationComponent } from './navigation/navigation.component';
import { actGuard } from './act.guard';
import { deactGuard } from './deact.guard';
import { DisplayModule } from './display/display.module';

const routes: Routes = [
  {path: "login",component: LoginComponent},
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path : "main",component:NavigationComponent,canActivate:[actGuard],canDeactivate:[deactGuard],
  children: [
    {path: '',redirectTo: 'entries',pathMatch: 'full'},
    {path: "profile",component: ProfileComponent},
    {path: "entries",component: EntriesComponent},
    {path: "display",loadChildren: () => import('./display/display.module').then(m => m.DisplayModule)}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
