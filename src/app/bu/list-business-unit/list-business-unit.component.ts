import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AddBusinessUnitComponent } from '../add-business-unit/add-business-unit.component';
import { EditBusinessUnitComponent } from '../edit-business-unit/edit-business-unit.component';
import { ViewBusinessUnitComponent } from '../view-business-unit/view-business-unit.component';
import { BusinessUnitService } from 'src/app/services/business-unit.service';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-list-business-unit',
  templateUrl: './list-business-unit.component.html',
  styleUrls: ['./list-business-unit.component.css']
})
export class ListBusinessUnitComponent {

  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e']
  data= {
    "bU_Name": "", 
    "bU_Description": "",

  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private BuService: BusinessUnitService) {

  }

  ngOnInit() {
    this.getAll();
  }
 

  getAll() {
   
    this.BuService.getAll().subscribe((response:any) => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response.data);
    }, (error) => {
      console.log(error);
    });
}

add(){
  this.dialog.open(AddBusinessUnitComponent,{ disableClose: true, height:'300px'});
  this.dialog.afterAllClosed.subscribe((open: any) => {
    this.getAll();
  });
}


edit(ele:any) {
  const dialogRef= this.dialog.open(EditBusinessUnitComponent,{ disableClose: true,
  data:ele });
  this.dialog.afterAllClosed.subscribe((open: any) => {
    this.getAll();
  });
}

update(ele:any) {
  this.BuService.update([ele]).subscribe((response:any) => {
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
      this.BuService.delete([ele]).subscribe(
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



detail(ele: any) {

this.dialog.open(ViewBusinessUnitComponent, { disableClose: true, data: ele });
  
this.dialog.afterAllClosed.subscribe(() => {
  
  this.getAll();
 });
  }

}
