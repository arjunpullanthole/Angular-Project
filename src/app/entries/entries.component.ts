import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { MatPaginator } from '@angular/material/paginator';

export interface IPeriodicElement 
{
    id: string;
    name: string;
    rate: string;
    vendor: string;
    implementation: string;
    technology: string;
    lead: string;
    status: string;
}

class PeriodicElement implements IPeriodicElement
{
    id='';
    name='';
    rate='';
    vendor='';
    implementation='';
    technology='';
    lead='';
    status='';
}

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit{

  constructor(private storage:StorageService, public dialog: MatDialog){}

  data:any;
  dataSource:any;
  selection = new SelectionModel<IPeriodicElement>(true, []);
  leads = ["Praveen","Tejan","Sagar","Raj","Jagesh","Manohar","Vinay","Spandana","Kranthi","All"];
  techs = ["Java","Angular","SQL","All"];
  displayedColumns = ["select", "position", "name", "rate", "vendor","implementation","technology","lead","status"];
  
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.storage.getData().subscribe(response => {
      this.data = response;
      this.update(this.data);
    });
  }

  update(data:any)
  {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection?.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(i:number, row?: IPeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${i + 1}`;
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditdialogComponent,{data:JSON.parse(JSON.stringify(this.selection.selected.at(0)))});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.storage.putData(result).subscribe(() => {
          this.storage.getData().subscribe(response => {
            this.data = response;
            this.update(this.data);
            this.selection.clear();
          });
        });
      }
    });
  }

  openAddDialog():void{
    const dialogRef = this.dialog.open(EditdialogComponent,{data:new PeriodicElement()});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.storage.postData(result).subscribe(() => {
          this.storage.getData().subscribe(response => {
            this.data = response;
            this.update(this.data);
          });
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySelection(val:any)
  {
    if(!val)
      return;
    if(val === "All")
    {
      this.dataSource.filter = "";
      return;
    }
    this.dataSource.filter = val.trim().toLowerCase();
  }

  isAdminView()
  {
    return this.storage.getrole() === "Admin" && this.storage.getmode() === "Admin" ;
  }

  delete()
  {
    this.selection.selected.forEach(data => {
      this.storage.deleteData(data).subscribe(() => {
        this.loadData();
      });
    })
    this.selection.clear();
  }
}
