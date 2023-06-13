import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminRemarksService } from 'src/app/services/admin-remarks.service';

@Component({
  selector: 'app-edit-admin-remarks',
  templateUrl: './edit-admin-remarks.component.html',
  styleUrls: ['./edit-admin-remarks.component.css']
})
export class EditAdminRemarksComponent {

isRejectionReasonEnabled: boolean = false;

decisionChange() {
  const decision = this.stag.decision;
  this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
}

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private adminService: AdminRemarksService) {}

  // update(ele:any) {
  //   var a = [ele];
  //   console.log(a);
    
  //   this.adminService.update(a).subscribe((response:any) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error);
  //   });
  
  // }

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.adminService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }


  performOperations(data2: any, stag: any) {
    //this.add(data2); // Call the add() function
    this.update(stag); // Call the update() function
  }

}
