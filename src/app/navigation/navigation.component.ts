import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor(private storage:StorageService,private router:Router){}

  mode :any;
  submissionBadge = false;
  ngOnInit(): void {
    this.storage.mode.subscribe(x => this.mode = x);
  }
  logout()
  {
    this.storage.changeAuth();
    this.router.navigate(['/login']);
  }
  isAdminView()
  {
    return this.storage.getrole() === "Admin" && this.storage.getmode() === "Admin" ;
  }

  isAdmin()
  {
    return this.storage.getrole() === "Admin";
  }
  toggleview()
  {
    if (this.storage.getrole() === "Admin")
    {
      this.storage.togglemode();
      this.router.navigate(['/main/entries']);
    }
  }
}
