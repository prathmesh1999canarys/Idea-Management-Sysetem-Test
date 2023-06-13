import { HttpClient } from '@angular/common/http';
import { Component,Inject,Input, OnInit, ViewChild } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { CXORemarksService } from 'src/app/services/cxo-remarks.service';
import { MatFormField } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { MatTableDataSource } from '@angular/material/table';
import { EditCxoRemarksComponent } from '../edit-cxo-remarks/edit-cxo-remarks.component';
import { ViewCxoRemarksComponent } from '../view-cxo-remarks/view-cxo-remarks.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-add-cxo-remarks',
  templateUrl: './add-cxo-remarks.component.html',
  styleUrls: ['./add-cxo-remarks.component.css']
})

export class AddCxoRemarksComponent  implements OnInit{

  @ViewChild('addForm') addForm!:NgForm

  isRejectionReasonEnabled: boolean = false;
  
  decisionChange() {
    const decision = this.data2.decision;
    this.isRejectionReasonEnabled = decision === 'Rejected' || decision === 'Rework';
  }
  
    @Input() buRemarkID: number = 0;
    data1={
  
      "problem":'',
      "solution":'',
      "status":'',
      "adminRemarks.decision": '',
      "adminRemarks.buRemarks.decision":'',
    }
  
    data2={
      
      // 'buRemarksId':0,
      "area": '',
      "rejectionReason": '',
      "remarks": '',
      "decision":null,
      "status":null,
    }
  
  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
    private http: HttpClient,
    private authService: MsalService,
    private cxoService: CXORemarksService,
    private ideaService:IdeaService,
    ) {}
  
  
    ngOnInit() {
      console.log(this.stag);
      
    }
  
  
  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.cxoService.getAll().subscribe((response: any) => {
      console.log(response);
    }, (error) => {
    console.log(error);
  });
  }
  
  add(ele: any) {
    ele.buRemarkId = this.stag.adminRemarks.buRemarks.id;
  console.log([ele]);
  console.log(ele);
  
  this.cxoService.create([ele]).subscribe((response: any) => {
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
