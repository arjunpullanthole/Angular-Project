import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  delete(val:string)
  {
    this.students = this.students.filter(v => v!==val);
  }

}
