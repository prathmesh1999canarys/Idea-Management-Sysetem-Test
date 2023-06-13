import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent {

  dataSource:any;

  displayedColumns:string[]=['d','e','a','b','c']

  data= {
     "problem": "",
     "solution": "",
    "remarks": " ",
    "area": "",
    "potentialCustomers": "",
    "workFlowStatus": "",
    "adminRemarksDecision": "",
    "adminRemarksBuRemarksDecision": "",
    "adminRemarksBuRemarksCxoRemarksDecision": "",
    "adminRemarksRemarks": "",
    "adminRemarksBuRemarksRemarks": "",
    "adminRemarksBuRemarksCxoRemarksRemarks": "",
    "bU_Id": 0,
    "id": 0,
    "createdBy": "00000000-0000-0000-0000-000000000000",
    "updatedBy": "00000000-0000-0000-0000-000000000000",
    "deleted": false
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private ideaService: IdeaService, @Inject(MAT_DIALOG_DATA) public stag:any) {

  }
  ngOnInit() {
    const ele = {};
    this.getDecisions(ele);
  }
responseArray: any [] = [];

matched: any [] = [];

  getDecisions(ele:any) {
    var a = [ele];


    this.ideaService.getStatus().subscribe((response:any) => {

      console.log(response);

      this.responseArray = response;

      const matchid = this.stag.id;
      console.log('id', matchid);

      this.matched = this.responseArray.filter((item: any) => item.id === matchid);

      console.log('shanti', this.matched);

      this.dataSource = new MatTableDataSource(this.matched)
      
    }, (error) => {
      console.log(error);
    });
}
}
