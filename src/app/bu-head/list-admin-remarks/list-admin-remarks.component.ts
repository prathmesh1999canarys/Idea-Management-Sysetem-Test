import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { BuHeadRemarksService } from 'src/app/services/bu-head-remarks.service';
import { AddBuRemarksComponent } from '../add-bu-remarks/add-bu-remarks.component';
import { AzureUserService } from 'src/app/services/azure-user.service';

@Component({
  selector: 'app-list-admin-remarks',
  templateUrl: './list-admin-remarks.component.html',
  styleUrls: ['./list-admin-remarks.component.css']
})
export class ListAdminRemarksComponent {
  dataSource:any;

  displayedColumns:string[]=['Date','Name','Problem','Solution','Status','Decision','add']

  data = {
    "problem": '',
    "solution": '',
    "status":'',
    "adminRemarks.decision": '',
    "createdBy":'',
    "createdDate":''
  }

  adminremarkid: number = 0;

  constructor(private http:HttpClient, private authService:MsalService, 
    private buHeadRemarksService: BuHeadRemarksService, private dialog: MatDialog,
    private AzureUserService :AzureUserService){}
    
    ngOnInit(){
      this.getNoBuRemarksAsync();
      this.getUser();
    }

    add(ele:any){
      console.log(ele)
      this.dialog.open(AddBuRemarksComponent,{ disableClose: true, height:'550px', data: ele});
      this.dialog.afterAllClosed.subscribe((open: any) => {
        this.getNoBuRemarksAsync();
      });
    }

    created : any [] = [];
    getNoBuRemarksAsync(){
      this.buHeadRemarksService.getNoBuRemarksAsync().subscribe((response:any)=>{
        console.log(response);
        this.created = response.data;

        this.dataSource = response;
      }, (error)=>{
        console.log(error);
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


