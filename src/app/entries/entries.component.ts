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
  input_name="";
  input_rate="";
  input_vendor="";
  input_impl="";
  input_tech="";
  input_lead="";
  input_status="";
  lead ="Lead";
  tech = "Technology";
  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  techs = ["Java","Angular","SQL","All"];
  data = [
    {name: "Arjun",rate: "95",vendor: "vendor1",implementation: "TCS",technology: "Angular",lead: "Praveen",status: "CONFIRMED"},
    {name: "John",rate: "80",vendor: "vendor2",implementation: "Infosys",technology: "React",lead: "Tejan",status: "CONFIRMED"},
    {name: "Emily",rate: "90",vendor: "vendor3",implementation: "Wipro",technology: "Vue.js",lead: "Sagar",status: "CONFIRMED"},
    {name: "David",rate: "85",vendor: "vendor4",implementation: "Accenture",technology: "Node.js",lead: "Raj",status: "CONFIRMED"},
    {name: "Sophia",rate: "92",vendor: "vendor5",implementation: "IBM",technology: "Java",lead: "Jagesh",status: "CONFIRMED"},
    {name: "Liam",rate: "88",vendor: "vendor6",implementation: "Cognizant",technology: "Python",lead: "Manohar",status: "CONFIRMED"},
    {name: "Ava",rate: "93",vendor: "vendor7",implementation: "Capgemini",technology: "C#",lead: "Vinay",status: "CONFIRMED"},
    {name: "Mia",rate: "87",vendor: "vendor8",implementation: "Deloitte",technology: "Ruby",lead: "Spandana",status: "CONFIRMED"},
    {name: "Noah",rate: "96",vendor: "vendor9",implementation: "PwC",technology: "PHP",lead: "Kranthi",status: "CONFIRMED"},
    {name: "Isabella",rate: "91",vendor: "vendor10",implementation: "Ernst & Young",technology: "HTML/CSS",lead: "Praveen",status: "CONFIRMED"}
  ];
  
  
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
    var nm = form?.getElementsByTagName('input').namedItem('name'+index)?.value;
    var rt = form?.getElementsByTagName('input').namedItem('rate'+index)?.value;
    var vdr = form?.getElementsByTagName('input').namedItem('vendor'+index)?.value;
    var impl = form?.getElementsByTagName('input').namedItem('implementation'+index)?.value;
    var tech = form?.getElementsByTagName('input').namedItem('technology'+index)?.value;
    var ld = form?.getElementsByTagName('input').namedItem('lead'+index)?.value;
    var st = form?.getElementsByTagName('input').namedItem('status'+index)?.value;
    this.data[index] = {
      name:nm?nm:'',
      rate:rt ? rt:'',
      vendor:vdr? vdr:'',
      implementation:impl?impl:'',
      technology:tech?tech:'',
      lead:ld?ld:'',
      status:st?st:''}
  }
  
  submit() {
    this.formModal.hide();
    this.data.push({
      name:this.input_name,
      rate:this.input_rate,
      vendor:this.input_vendor,
      technology:this.input_tech,
      implementation:this.input_impl,
      lead:this.input_lead,
      status:this.input_status})
      this.input_name="";
      this.input_rate="";
      this.input_vendor="";
      this.input_impl="";
      this.input_tech="";
      this.input_lead="";
      this.input_status="";
  }
  
  getSelectedLead(val:string)
  {
    this.lead = val;
  }
  getSelectedTech(val:string)
  {
    this.tech = val;
  }
  delete(i:number)
  {
    this.data.splice(i,1);
  }
}
