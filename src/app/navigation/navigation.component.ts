import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  constructor(private storage:StorageService,private router:Router,private overlayContainer: OverlayContainer){}

  submissionBadge = false;
  @HostBinding('class') className = '';
  
  ngOnInit(): void {
    this.storage.darktheme.subscribe(val => {
      const dark = 'darkMode';
      this.className = val ? dark : '';
      const classes = this.overlayContainer.getContainerElement().classList;
      if(val)
        classes.add(dark);
      else
        classes.remove(dark);
    });
  }

  logout()
  {
    this.storage.changeAuth();
    this.router.navigate(['/login']);
  }

  isdarktheme()
  {
    return this.storage.gettheme();
  }

  toggletheme()
  {
    this.storage.toggletheme();
  }

  getmode()
  {
    return this.storage.getmode();
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
