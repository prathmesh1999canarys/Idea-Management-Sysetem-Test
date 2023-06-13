import { HttpClient } from '@angular/common/http';
import { Component, Inject,Input, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BuHeadRemarksService } from 'src/app/services/bu-head-remarks.service';
import { MatTableDataSource } from '@angular/material/table'; 
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-add-bu-remarks',
  templateUrl: './add-bu-remarks.component.html',
  styleUrls: ['./add-bu-remarks.component.css']
})
export class AddBuRemarksComponent  implements OnInit{

  minDate : Date | undefined;
  selectedDate: Date | undefined;
  
    isRejectionReasonEnabled: boolean = false;
  
    decisionChange() {
      const decision = this.data2.decision;
      this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
    }
    
  
    @Input() adminremarkId: number = 0;
  
    data1 = {
      "problem": '',
      "solution": '',
      "status": '',
      "adminRemarks.decision": '',
    }
  
    data2 = {
      "id": 0,
      "deleted": false,
      "ideaId": 0,
      "decision": null,
      "budget": 0,
      "lead": '',
      "deadline": new Date(),    
      "rejectionReason": '',
      "remarks": '',
      "projectId": ''
    }
  
    constructor(@Inject(MAT_DIALOG_DATA) public stag:any, 
    private http: HttpClient, 
    private authService: MsalService,  
    private buHeadRemarksService: BuHeadRemarksService,
    private ideaService:IdeaService,
    private router: Router) {
      this.minDate=new Date();
    }
  
    ngOnInit(){
      console.log(this.stag);
    }
  
    getID(ele: any) {
      var a = [ele];
      console.log(a);
      this.buHeadRemarksService.getAll().subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  
    add(ele: any) {
      ele.adminremarkid = this.stag.adminRemarks.id;
      console.log([ele]);
      this.buHeadRemarksService.create([ele]).subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  
  
    update(ele:any) {
      var a = [ele];
      console.log(a); 
      this.ideaService.update(a).subscribe((response:any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
    }
  
    performOperations(data2: any, stag: any) {
      this.add(data2); // Call the add() function
      this.update(stag); // Call the update() function
    }

}

