import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CXORemarksService } from 'src/app/services/cxo-remarks.service';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-edit-cxo-remarks',
  templateUrl: './edit-cxo-remarks.component.html',
  styleUrls: ['./edit-cxo-remarks.component.css']
})
export class EditCxoRemarksComponent {

  isRejectionReasonEnabled: boolean = false;

  decisionChange() {
    const decision = this.stag.decision;
    this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
    if (this.stag.decision === 'Accepted') {
      this.stag.rejectionReason = ''; // Reset the rejection reason value
    }
  }
  
constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
private http: HttpClient,
private authService: MsalService,
private cxoService: CXORemarksService) {}

  update(ele:any) {
    var a = [ele];
    console.log(a); 
    this.cxoService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }

}
