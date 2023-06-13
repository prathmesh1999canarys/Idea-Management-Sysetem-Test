import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { IdeaService } from 'src/app/services/idea.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css']
})
export class ViewIdeaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private dialog: MatDialog,private http: HttpClient, 
  private authService: MsalService, private ideaService: IdeaService,
  private location: Location) {}

goBack() {
  this.location.back();

}

getID(ele: any) {

  var a = [ele];
 console.log(a);
 this.ideaService.getAll().subscribe((response:any)=>{
 console.log(response);
 }, (error) =>{
   console.log(error);
 }
 );
 }

}
