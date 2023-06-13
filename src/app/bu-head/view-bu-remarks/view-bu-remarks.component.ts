import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { BuHeadRemarksService } from 'src/app/services/bu-head-remarks.service';

@Component({
  selector: 'app-view-bu-remarks',
  templateUrl: './view-bu-remarks.component.html',
  styleUrls: ['./view-bu-remarks.component.css']
})
export class ViewBuRemarksComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private dialog: MatDialog, 
  private http: HttpClient, 
  private authService: MsalService,
  private buHeadRemarksService: BuHeadRemarksService) {}

  getID(ele: any) {
    var a = [ele];
    console.log(a);
    this.buHeadRemarksService.getAll().subscribe(
      (response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }
    );
  }

}


