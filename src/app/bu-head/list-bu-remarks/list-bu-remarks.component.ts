import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { BuHeadRemarksService } from 'src/app/services/bu-head-remarks.service';
import { ListAdminRemarksComponent } from '../list-admin-remarks/list-admin-remarks.component';
import { MatTableDataSource } from '@angular/material/table';
import { EditBuRemarksComponent } from '../edit-bu-remarks/edit-bu-remarks.component';
import { ViewBuRemarksComponent } from '../view-bu-remarks/view-bu-remarks.component';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-list-bu-remarks',
  templateUrl: './list-bu-remarks.component.html',
  styleUrls: ['./list-bu-remarks.component.css']
})
export class ListBuRemarksComponent {

  dataSource:any;

  displayedColumns:string[]=['Problem','Solution','Status','adminDecision','BUdecision','view','edit','delete']

  data = {
    "adminRemarksIdeaProblem": '',
    "adminRemarksIdeaSolution": '',
    "adminRemarksIdeaStatus":'',
    "adminRemarksDecision":'',
    "decision": '',
  }

  constructor(private http:HttpClient, private authService:MsalService, 
    private buHeadRemarksService: BuHeadRemarksService, private dialog: MatDialog){}

    ngOnInit(){
      this.getAll();
    }

    add(){
      this.dialog.open(ListAdminRemarksComponent,{ disableClose: true,});
      this.dialog.afterAllClosed.subscribe((open: any) => {
        this.getAll();
      });
    }

    getAll(){
      this.buHeadRemarksService.getAll().subscribe((response:any)=>{
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error)=>{
        console.log(error);
      });
    }

    edit(ele:any) {
      const dialogRef= this.dialog.open(EditBuRemarksComponent,{ disableClose: true, height:'450px',
      data:ele });
      this.dialog.afterAllClosed.subscribe((open: any) => {
        this.getAll();
      });
    }

    update(ele:any) {
      this.buHeadRemarksService.update([ele]).subscribe((response:any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
    
    delete(ele: number): void {
      const dialogRef = this.dialog.open(AlertPopUpComponent, {
        disableClose: true,
        height: '200px',
        width: '300px',
      });
    
      dialogRef.afterClosed().subscribe((result) => {
        if (result === true) {
          this.buHeadRemarksService.delete([ele]).subscribe(
            (response) => {
              console.log(response);
              this.getAll();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
    }

    detail(ele:any){
      this.dialog.open(ViewBuRemarksComponent,{disableClose:true, height:'480px', data:ele});
      this.dialog.afterAllClosed.subscribe(()=>{
        this.getAll();
      });
    }

}
