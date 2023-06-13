import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AdminRemarksService } from 'src/app/services/admin-remarks.service';
import { ListAdminRemarksComponent } from '../list-admin-remarks/list-admin-remarks.component';

@Component({
  selector: 'app-view-admin-remarks',
  templateUrl: './view-admin-remarks.component.html',
  styleUrls: ['./view-admin-remarks.component.css']
})
export class ViewAdminRemarksComponent {

  dataSource: MatTableDataSource<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public stag: any,
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private adminService: AdminRemarksService,
    public dialogRef: MatDialogRef<ListAdminRemarksComponent>
  ) {
    this.dataSource = new MatTableDataSource<any>([stag]);
  }
  

  getID(element: any) {
    var a = [element];
    console.log(a);
    this.adminService.getAll().subscribe(
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
