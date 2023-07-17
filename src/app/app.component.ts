import { Component, HostBinding, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
import { OverlayConnectionPosition, OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Submissions';
  @HostBinding('class') className = '';

  constructor(private storage: StorageService, private overlayContainer: OverlayContainer){}
  
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
}
