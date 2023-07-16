import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent {

  leads = [{name:"Praveen",technology:"Java",email:"praveen@gmail.com"},
  {name:"Tejan",technology:"Angular",email:"tejan@gmail.com"},
  {name:"Sagar",technology:"REST",email:"sagar@gmail.com"},
  {name:"Raj",technology:"Node",email:"raj@gmail.com"},
  {name:"Jagesh",technology:"Maven",email:"jag@gmail.com"},
  {name:"Manohar",technology:"Jest",email:"manohar@gmail.com"},
  {name:"Vinay",technology:"Selenium",email:"vinay@gmail.com"},
  {name:"Spandana",technology:"Junit",email:"spand@gmail.com"},
  {name:"Kranthi",technology:"J2EE",email:"krant@gmail.com"}];

  delete(val:string)
  {
    this.leads = this.leads.filter(v => v.email!==val);
  }

}
