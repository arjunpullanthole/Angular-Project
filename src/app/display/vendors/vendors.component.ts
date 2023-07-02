import { Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {

  vendors = ["vendor1","vendor2","vendor3","vendor4","vendor5","vendor6","vendor6","vendor7","vendor8","vender9"];
  delete(val:string)
  {
    this.vendors = this.vendors.filter(v => v!==val);
  }

}
