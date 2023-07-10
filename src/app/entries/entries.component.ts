import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    this.storage.getData().subscribe(response => {
      this.data = response;
  });
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
  data:any;

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
    
    this.data[index].name =  nm?nm:'';
    this.data[index].rate = rt ? rt:'';
    this.data[index].vendor = vdr? vdr:'';
    this.data[index].implementation = impl?impl:'';
    this.data[index].technology = tech?tech:'';
    this.data[index].lead = ld?ld:'';
    this.data[index].status = st?st:'';

    this.storage.putData(this.data[index]).subscribe(response => {
      this.storage.getData().subscribe(response => {
        this.data = response;
      });
    });
  }
  
  submit() {
    this.formModal.hide();
    this.storage.postData({
      name:this.input_name,
      rate:this.input_rate,
      vendor:this.input_vendor,
      technology:this.input_tech,
      implementation:this.input_impl,
      lead:this.input_lead,
      status:this.input_status}).subscribe(response => {
        this.storage.getData().subscribe(response => {
          this.data = response;
        });
      });
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
  delete(index:number)
  {
    this.storage.deleteData(this.data[index]).subscribe(response => {
      this.storage.getData().subscribe(response => {
        this.data = response;
      });
    });
  }
}
