import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { elements } from 'chart.js';
import { DatePipe } from '@angular/common';
import { AdminRemarksService } from 'src/app/services/admin-remarks.service';
import { AzureUserService } from 'src/app/services/azure-user.service';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-add-admin-remarks',
  templateUrl: './add-admin-remarks.component.html',
  styleUrls: ['./add-admin-remarks.component.css'],
  providers: [DatePipe] // Add the DatePipe provider

})
export class AddAdminRemarksComponent {

isRejectionReasonEnabled: boolean = false;

decisionChange() {
  const decision = this.data2.decision;
  this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
}

@Input() IdeaId: number=0;
  
    data={

      "id":0,
      "problem":'',
      "solution":'',
      "status":'',
      "createdBy":'',
      "createdDate":''
  }
    data2 = {
      "id":0,
      "remarks":"",
      "clarity": null,
      "fitment": null,
      "practicality": null,
      "timing": null,
      "decision": null,
      "rejectionReason": "",
      "size": null,
  
  };
  
  constructor(private dialog: MatDialog,private http: HttpClient, 
    @Inject(MAT_DIALOG_DATA) public stag:any,
    private authService: MsalService, 
    private adminRemarksService: AdminRemarksService,
    private ideaService: IdeaService,
    private AzureUserService :AzureUserService,
    private datePipe: DatePipe
    ) {
  }
  
  ngOnInit() {
    console.log(this.stag);
    this.stag.createdDate = this.formatDate(this.stag.createdDate);
  }

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.adminRemarksService.getAll().subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  add(ele:any) {
 
    ele.ideaid = this.stag.id;
    console.log("after updating id");
    console.log([ele]);
         this.adminRemarksService.create([ele]).subscribe((response:any) => {
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

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

}
