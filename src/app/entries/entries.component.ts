import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit{
  formModal: any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
 
  openFormModal() {
    this.formModal.show();
  }
  submit() {
    this.formModal.hide();
    this.data.push({
      firstname:this.input_firstname,
      lastname:this.input_lastname,
      technology:this.input_tech,
      lead:this.input_lead,
      email:this.input_email})
      this.input_firstname="";
      this.input_lastname="";
      this.input_tech="";
      this.input_lead="";
      this.input_email="";
  }
  input_firstname="";
  input_lastname="";
  input_tech="";
  input_lead="";
  input_email="";

  lead ="Lead";
  tech = "Technology";
  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  techs = ["Java","Angular","SQL","All"];
  data = [
    {firstname:"Arjun",lastname:"Pullanthole",technology:"All",lead:"Praveen",email:"arjun@gmail.com"},
    {firstname:"Satish",lastname:"Anil",technology:"Angular",lead:"Tejan",email:"satish@gmail.com"},
    {firstname:"Naveen",lastname:"Menon",technology:"SQL",lead:"Sagar",email:"naveen@gmail.com"},
    {firstname:"Sunil",lastname:"Nair",technology:"Java",lead:"Raj",email:"sunil@gmail.com"},
    {firstname:"prav",lastname:"patel",technology:"SQL",lead:"Jagesh",email:"prav@gmail.com"},
    {firstname:"kavin",lastname:"lal",technology:"Angular",lead:"Manohar",email:"kavin@gmail.com"},
    {firstname:"roshan",lastname:"kaur",technology:"All",lead:"Vinay",email:"roshan@gmail.com"},
    {firstname:"sam",lastname:"kris",technology:"Java",lead:"Spandana",email:"sam@gmail.com"},
    {firstname:"jim",lastname:"bean",technology:"SQL",lead:"Kranthi",email:"jijm@gmail.com"}
  ]
  getSelectedLead(val:string)
  {
    this.lead = val;
  }
  getSelectedTech(val:string)
  {
    this.tech = val;
  }
  delete(val:string)
  {
    this.data = this.data.filter(obj => obj.email!==val);
  }
}
