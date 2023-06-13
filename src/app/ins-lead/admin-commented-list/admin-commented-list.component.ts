import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { AdminRemarksService } from 'src/app/services/admin-remarks.service';
import { ListAdminRemarksComponent } from '../list-admin-remarks/list-admin-remarks.component';
import { MatTableDataSource } from '@angular/material/table';
import { EditAdminRemarksComponent } from '../edit-admin-remarks/edit-admin-remarks.component';
import { ViewAdminRemarksComponent } from '../view-admin-remarks/view-admin-remarks.component';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-admin-commented-list',
  templateUrl: './admin-commented-list.component.html',
  styleUrls: ['./admin-commented-list.component.css']
})
export class AdminCommentedListComponent {

  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e','f','g','i','k','l','m']

  data= {

    "ideaProblem": "",
    "ideaStatus": "",
    "ideaSolution":'',
    //"createdBy":'',
    "clarity": "",
    "fitment": "",
    "practicality": "",
    "timing": "",
    "decision": "",
    "rejectionReason": "",
    "size": "",
    "remarks": "",

  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private adminRemarksService: AdminRemarksService) {

  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(ListAdminRemarksComponent,{ disableClose: true});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {
   
      //ele.this.ideaStatus=this.stag.status;
      this.adminRemarksService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

edit(ele:any) {
  const dialogRef= this.dialog.open(EditAdminRemarksComponent,{ disableClose: true, height:'360px',
  data:ele });
  this.dialog.afterAllClosed.subscribe((open: any) => {
    this.getAll();
  });
}

update(ele:any) {
  this.adminRemarksService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele: number): void {
  const dialogRef = this.dialog.open(AlertPopUpComponent, {
    disableClose: true,
    height: '200px',
    width: '300px',
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      this.adminRemarksService.delete([ele]).subscribe(
        (response) => {
          console.log(response);
          this.getAll();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });
}

detail(ele: any) {

  this.dialog.open(ViewAdminRemarksComponent, { disableClose: true, height :'480px', width:'500px', data: ele });
    this.dialog.afterAllClosed.subscribe(() => {
    this.getAll();
    });
    }

}
