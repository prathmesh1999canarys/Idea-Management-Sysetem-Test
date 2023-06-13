import { HttpClient } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { CXORemarksService } from 'src/app/services/cxo-remarks.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddCxoRemarksComponent } from '../add-cxo-remarks/add-cxo-remarks.component';
import { EditCxoRemarksComponent } from '../edit-cxo-remarks/edit-cxo-remarks.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-view-cxo-remarks',
  templateUrl: './view-cxo-remarks.component.html',
  styleUrls: ['./view-cxo-remarks.component.css']
})
export class ViewCxoRemarksComponent {



  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
    private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private cxoService: CXORemarksService) {
  }

  getID(ele: any) {
    var a =  [ele];

    console.log(a);

    this.cxoService.getAll().subscribe((response:any)=>{
      console.log(response);
    }, (error) =>{
      console.log(error);
    }
    );

}
}
