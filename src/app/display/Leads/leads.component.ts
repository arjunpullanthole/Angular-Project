import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent {

  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  delete(val:string)
  {
    this.leads = this.leads.filter(v => v!==val);
  }

}
