import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Actor {
  image: string;
  name: string;
  role: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dataSource: any;
  displayedColumns: any[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) { }

  ngOnInit() {
    console.log(this.dialogData);
    if (this.dialogData.actor !== undefined) {
      this.getActors();
    } else if (this.dialogData.crew !== undefined) {
      this.getCrews();
    }
  }

  getActors() {
    this.displayedColumns = ['image', 'name', 'character'];
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = this.dialogData.actor;
    this.dataSource.paginator = this.paginator;
  }

  getCrews() {
    this.displayedColumns = ['image', 'name', 'job'];
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = this.dialogData.crew;
    this.dataSource.paginator = this.paginator;
  }
}
