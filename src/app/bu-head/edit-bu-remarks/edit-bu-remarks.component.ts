import { Component,Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BuHeadRemarksService } from 'src/app/services/bu-head-remarks.service';



@Component({
  selector: 'app-edit-bu-remarks',
  templateUrl: './edit-bu-remarks.component.html',
  styleUrls: ['./edit-bu-remarks.component.css']
})
export class EditBuRemarksComponent {

minDate:Date | undefined;

  isRejectionReasonEnabled: boolean = false;

  decisionChange() {
    const decision = this.stag.decision;
    this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private buHeadRemarksService: BuHeadRemarksService) {
    this.minDate=new Date();
  }

  update(ele:any) {
    var a = [ele];
    console.log(a);
    this.buHeadRemarksService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }
}


