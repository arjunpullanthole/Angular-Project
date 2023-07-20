import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ISubmission } from '../entries/entries.component';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent{

  constructor(
    public dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISubmission
  ) {}
}
