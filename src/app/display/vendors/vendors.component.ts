import { Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent {

  vendors = [
  {name:"vendor1",email:"v@gmail.com",phone:"7238979284"},
  {name:"vendor2",email:"v1@gmail.com",phone:"7238979284"},
  {name:"vendor3",email:"v2@gmail.com",phone:"7238979284"},
  {name:"vendor4",email:"v3@gmail.com",phone:"7238979284"},
  {name:"vendor5",email:"v4@gmail.com",phone:"7238979284"},
  {name:"vendor6",email:"v5@gmail.com",phone:"7238979284"},
  {name:"vendor6",email:"v6@gmail.com",phone:"7238979284"},
  {name:"vendor7",email:"v7@gmail.com",phone:"7238979284"},
  {name:"vendor8",email:"v8@gmail.com",phone:"7238979284"},
  {name:"vender9",email:"v9@gmail.com",phone:"7238979284"}];

  delete(val:string)
  {
    this.vendors = this.vendors.filter(v => v.email!==val);
  }

}
