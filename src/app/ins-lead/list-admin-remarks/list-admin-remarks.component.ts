import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { AdminRemarksService } from 'src/app/services/admin-remarks.service';
import { AddAdminRemarksComponent } from '../add-admin-remarks/add-admin-remarks.component';
import { AzureUserService } from 'src/app/services/azure-user.service';

@Component({
  selector: 'app-list-admin-remarks',
  templateUrl: './list-admin-remarks.component.html',
  styleUrls: ['./list-admin-remarks.component.css']
})
export class ListAdminRemarksComponent {

  dataSource: any;

  displayedColumns: string[] = ['f','e','a','b','d','c'];
  data = {

    "problem":'',
    "solution":'',
    "status":'',
    "createdBy":'',
    "createdDate": '',
  };

  ideaid: number =0;

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private adminRemarks: AdminRemarksService,
    private AzureUserService :AzureUserService )
     {  }
  
     ngOnInit() {

      this.getNoAdminRemarks();
      this.getUser();
    }
  
    created : any [] = [];

    getNoAdminRemarks()
  {
    this.adminRemarks.getNoAdminRemarks().subscribe((response:any) => {
            console.log(response);
            this.created = response.data;

            this.dataSource = response;
          }, (error) => {
            console.log(error);
          });
  
  }
  
  add(ele:any) {
    const dialogRef= this.dialog.open(AddAdminRemarksComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getNoAdminRemarks();
    });
  }

  Emp: any = [];
  getUser() {

    this.AzureUserService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.Emp = response;
        this.matchIdAndCreatedBy();
      },

      (error) => {
        console.log(error);
      }

    );

  }

  matchIdAndCreatedBy() {
    for (const entry of this.created) {
      const matchingUser = this.Emp.find(

        (user: any) => user.id === entry.createdBy
      );
      console.log('sandeepMB', matchingUser);
      if (matchingUser) {

        console.log('Matching User:', matchingUser.displayName);
        // Display the displayName or perform further operations with the matchingUser object
      } else {
        console.log('User not found');
      }
    }

  }

  getDisplayName(createdBy: any): string {

    const matchingUser = this.Emp.find((user: any) => user.id === createdBy);

    return matchingUser ? matchingUser.displayName : '';

  }

}
