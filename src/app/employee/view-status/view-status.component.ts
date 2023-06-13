import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent {

  dataSource:any;

  displayedColumns:string[]=['d','e','a','b','c']

  data= {
    // "problem": "",
    // "solution": "",
    // "remarks": " ",
    // "area": "",
    // "potentialCustomers": "",
    // "workFlowStatus": "",
    "status": "",
    // "bU_Id": 0,
    "adminRemarksDecision": "",
    "adminRemarksBuRemarksDecision": "",
    "adminRemarksBuRemarksCxoRemarksDecision": "",
    // "id": 0,
    // "createdBy": "00000000-0000-0000-0000-000000000000",
    // "updatedBy": "00000000-0000-0000-0000-000000000000",
    // "updatedDate": ,
    // "createdDate": ,
    // "deleted": false
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private ideaService: IdeaService) {

  }

  updateStatus(adminRemarksDecision: string, data: any) {
    if (adminRemarksDecision === 'Accepted') {
      data.status = 'Approved By Admin';
    } else if (adminRemarksDecision === 'Rework') {
      data.status = 'Rework Needed';
    } else if (adminRemarksDecision === 'Rejected') {
      data.status = 'Rejected by Admin';
    }
    this.getDecisions();
  }
  

  ngOnInit() {
    this.getDecisions();
  }

  getDecisions() {
   
    this.ideaService.getStatus().subscribe((response:any) => {
      console.log(response);
      this.dataSource = response;
      // console.log('Prathmesh',this.dataSource)
    }, (error) => {
      console.log(error);
    });
}
  

}

