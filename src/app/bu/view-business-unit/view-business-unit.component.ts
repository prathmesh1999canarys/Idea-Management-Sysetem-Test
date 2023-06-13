import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { BusinessUnitService } from 'src/app/services/business-unit.service';

@Component({
  selector: 'app-view-business-unit',
  templateUrl: './view-business-unit.component.html',
  styleUrls: ['./view-business-unit.component.css']
})
export class ViewBusinessUnitComponent {

  dataSource: MatTableDataSource<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public stag: any,
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private BuService: BusinessUnitService,
    public dialogRef: MatDialogRef<ViewBusinessUnitComponent>
  ) {
    this.dataSource = new MatTableDataSource<any>([stag]);
  }
  

  getID(element: any) {
    var a = [element];
    console.log(a);
    this.BuService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
