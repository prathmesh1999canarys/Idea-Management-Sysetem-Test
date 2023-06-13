import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { CXORemarksService } from 'src/app/services/cxo-remarks.service';
import { AddCxoRemarksComponent } from '../add-cxo-remarks/add-cxo-remarks.component';
import { EditCxoRemarksComponent } from '../edit-cxo-remarks/edit-cxo-remarks.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewCxoRemarksComponent } from '../view-cxo-remarks/view-cxo-remarks.component';
import { NewCxoRemarksComponent } from '../new-cxo-remarks/new-cxo-remarks.component';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-list-cxo-remarks',
  templateUrl: './list-cxo-remarks.component.html',
  styleUrls: ['./list-cxo-remarks.component.css']
})
export class ListCxoRemarksComponent {

  dataSource:any;

  displayedColumns:string[]=['c','d','e','f','g','j','k','l','m']

  data= {
    "id": 0,
    "buRemarkId": 0,
    "buRemarksAdminRemarksIdeaProblem": '',
    "buRemarksAdminRemarksIdeaSolution": '',
    "buRemarksAdminRemarksDecision": '',
    "buRemarksDecision": '',
    "area": '',
    "rejectionReason": '',
    "remarks": '',
    "decision": '',
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private cxoService: CXORemarksService) {
  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(NewCxoRemarksComponent,{ disableClose: true,height:'450px',width:'700px'});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }



  edit(ele:any) {
    const dialogRef= this.dialog.open(EditCxoRemarksComponent,{ disableClose: true,
    data:ele,height:'380px',width:'490px' });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {
   
    this.cxoService.getAll().subscribe((response:any) => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response.data);
    }, (error) => {
      console.log(error);
    });
}

getNoCxoComments() {
   
  this.cxoService.getNoCxoComments().subscribe((response:any) => {
    console.log(response);
    this.dataSource = new MatTableDataSource(response.data);
  }, (error) => {
    console.log(error);
  });
}

update(ele:any) {
this.cxoService.update([ele]).subscribe((response:any) => {
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
      this.cxoService.delete([ele]).subscribe(
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

  this.dialog.open(ViewCxoRemarksComponent,{disableClose:true, data:ele,height:'550px',width:'500px'});
  this.dialog.afterAllClosed.subscribe(()=>{
  this.getAll();
  });

}

}
