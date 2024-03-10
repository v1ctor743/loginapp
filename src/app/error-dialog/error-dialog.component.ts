import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ErrorDialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}