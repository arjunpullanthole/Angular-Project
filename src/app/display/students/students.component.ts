import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lead ="Lead";
  tech = "Technology";
  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  techs = ["Java","Angular","SQL","All"];
  students = [
    {firstname: "Arjun",lastname: "Pullanthole",technology: "Angular",lead: "Praveen",email: "arj@gmail.com"},
    {firstname: "John",lastname: "xnjkcnsk",technology: "React",lead: "Tejan",email: "john@gmail.com"},
    {firstname: "Emily",lastname: "jscnkj",technology: "Vue.js",lead: "Sagar",email: "emily@gmail.com"},
    {firstname: "David",lastname: "kjcnkja",technology: "Node.js",lead: "Raj",email: "david@gmail.com"},
    {firstname: "Sophia",lastname: "kjcnc",technology: "Java",lead: "Jagesh",email: "sophia@gmail.com"},
    {firstname: "Liam",lastname: "jjr",technology: "Python",lead: "Manohar",email: "liam@gmail.com"},
    {firstname: "Ava",lastname: "ifjwf",technology: "C#",lead: "Vinay",email: "ava@gmail.com"},
    {firstname: "Mia",lastname: "jknwsk",technology: "Ruby",lead: "Spandana",email: "mia@gmail.com"},
    {firstname: "Noah",lastname: "jfnwk",technology: "PHP",lead: "Kranthi",email: "noah@gmail.com"},
    {firstname: "Isabella",lastname: "hfbk",technology: "HTML/CSS",lead: "Praveen",email: "isa@gmail.com"}
  ];
  delete(val:string)
  {
    this.students = this.students.filter(v => v.email!==val);
  }
  getSelectedLead(val:string)
  {
    this.lead = val;
  }
  getSelectedTech(val:string)
  {
    this.tech = val;
  }
}
