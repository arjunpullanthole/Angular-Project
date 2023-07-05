import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { StorageService } from '../storage.service';
import { DOCUMENT } from '@angular/common';
declare var window: any;
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit{

  constructor(private storage:StorageService){}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  formModal: any;
  editModal:any;
  input_firstname="";
  input_lastname="";
  input_vendor="";
  input_tech="";
  input_lead="";
  input_email="";
  lead ="Lead";
  tech = "Technology";
  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  techs = ["Java","Angular","SQL","All"];
  data = [
    {firstname:"Arjun",lastname:"Pullanthole",vendor:"vendor1",technology:"All",lead:"Praveen",email:"arjun@gmail.com"},
    {firstname:"Satish",lastname:"Anil",vendor:"vendor2",technology:"Angular",lead:"Tejan",email:"satish@gmail.com"},
    {firstname:"Naveen",lastname:"Menon",vendor:"vendor3",technology:"SQL",lead:"Sagar",email:"naveen@gmail.com"},
    {firstname:"Sunil",lastname:"Nair",vendor:"vendor4",technology:"Java",lead:"Raj",email:"sunil@gmail.com"},
    {firstname:"prav",lastname:"patel",vendor:"vendor5",technology:"SQL",lead:"Jagesh",email:"prav@gmail.com"},
    {firstname:"kavin",lastname:"lal",vendor:"vendor6",technology:"Angular",lead:"Manohar",email:"kavin@gmail.com"},
    {firstname:"roshan",lastname:"kaur",vendor:"vendor7",technology:"All",lead:"Vinay",email:"roshan@gmail.com"},
    {firstname:"sam",lastname:"kris",vendor:"vendor8",technology:"Java",lead:"Spandana",email:"sam@gmail.com"},
    {firstname:"jim",lastname:"bean",vendor:"vendor9",technology:"SQL",lead:"Kranthi",email:"jijm@gmail.com"}
  ]
  
  openFormModal() {
    this.formModal.show();
  }
  editFormModal(val:number)
  {
    this.editModal = new window.bootstrap.Modal(
      document.getElementById('editModal'+val));
    this.editModal.show();
  }

  isAdminView()
  {
    return this.storage.getrole() === "Admin" && this.storage.getmode() === "Admin" ;
  }

  edit(index:number)
  {
    this.editModal.hide();
    var form = document.getElementById('editModal'+index);
    var fname = form?.getElementsByTagName('input').namedItem('firstname')?.value;
    var lname = form?.getElementsByTagName('input').namedItem('lastname')?.value;
    var vdr = form?.getElementsByTagName('input').namedItem('vendor')?.value;
    var tech = form?.getElementsByTagName('input').namedItem('technology')?.value;
    var ld = form?.getElementsByTagName('input').namedItem('lead')?.value;
    var eml = form?.getElementsByTagName('input').namedItem('email')?.value;
    this.data[index] = {
      firstname:fname?fname:'',
      lastname:lname ? lname:'',
      vendor:vdr? vdr:'',
      technology:tech?tech:'',
      lead:ld?ld:'',
      email:eml?eml:''}
  }
  
  submit() {
    this.formModal.hide();
    this.data.push({
      firstname:this.input_firstname,
      lastname:this.input_lastname,
      technology:this.input_tech,
      vendor:this.input_vendor,
      lead:this.input_lead,
      email:this.input_email})
      this.input_firstname="";
      this.input_lastname="";
      this.input_vendor="";
      this.input_tech="";
      this.input_lead="";
      this.input_email="";
  }
  
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
