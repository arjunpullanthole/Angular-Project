import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private storage:StorageService,private router:Router){}
  logout()
  {
    this.storage.changeAuth();
    this.router.navigate(['/login']);
  }
  isAdmin()
  {
    return this.storage.getrole() === "Admin";
  }

}
