import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { CXORemarksService } from 'src/app/services/cxo-remarks.service';
import { AddCxoRemarksComponent } from '../add-cxo-remarks/add-cxo-remarks.component';
import { EditCxoRemarksComponent } from '../edit-cxo-remarks/edit-cxo-remarks.component';
import { ViewCxoRemarksComponent } from '../view-cxo-remarks/view-cxo-remarks.component';
import { AzureUserService } from 'src/app/services/azure-user.service';


@Component({
  selector: 'app-new-cxo-remarks',
  templateUrl: './new-cxo-remarks.component.html',
  styleUrls: ['./new-cxo-remarks.component.css']
})
export class NewCxoRemarksComponent {

  dataSource:any;

  displayedColumns:string[]=['f','g','a','b','c','d','e']

  data={
    "problem":'',
    "solution":'',
    "adminRemarks.decision": '',
    "adminRemarks.buRemarks.decision":'',
    "createdBy": '',
    "createdDate":''
  }

  buRemarkId: number = 0;

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private cxoService: CXORemarksService,
    private AzureUserService :AzureUserService) {
  }

  ngOnInit() {
    this.getNoCxoComments();
    this.getUser();
  }

  add(ele: any){
    console.log(ele);
    
    this.dialog.open(AddCxoRemarksComponent,{ disableClose: true, data: ele, height:'420px',width:'600px'});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      // this.getAll();
      this.getNoCxoComments();
    });
  }


created : any [] = [];
getNoCxoComments() {
   
  this.cxoService.getNoCxoComments().subscribe((response:any) => {
    console.log(response);
    this.created=response.data;
    this.dataSource = response;
  }, (error) => {
    console.log(error);
  });
}

update(ele:any) {
this.cxoService.update([ele]).subscribe((response:any) => {
  console.log(response);
}, (error) => {
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
