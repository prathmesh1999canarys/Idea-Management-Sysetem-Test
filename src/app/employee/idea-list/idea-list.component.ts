import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { IdeaService } from 'src/app/services/idea.service';
import { AddIdeaComponent } from '../add-idea/add-idea.component';
import { EditIdeaComponent } from '../edit-idea/edit-idea.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewIdeaComponent } from '../view-idea/view-idea.component';
import { ViewStatusComponent } from '../view-status/view-status.component';
import { ListCxoRemarksComponent } from 'src/app/cxo/list-cxo-remarks/list-cxo-remarks.component';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';
import { AzureUserService } from 'src/app/services/azure-user.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent {

  dataSource:any;
  displayedColumns:string[]=['l','q','a','b','c','d','e','h','i','j','k']

  data= {
    id: 0,
    problem: '',
    solution: '',
    remarks: '',
    area: '',
    status: '',
    potentialCustomers:'',
    workFlowStatus:'',
    businessUnitBU_Nam:'',
    adminRemarksDecision : '',
    adminRemarksBuRemarksDecision: '',
    adminRemarksBuRemarksCxoRemarksDecision: '',
    createdDate:'',
    createdBy:'',
    updatedDate:'',

  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private ideaService: IdeaService,
    private AzureUserService :AzureUserService ) {

    }

    ngOnInit() {
      this.getAll();
      this.getUser();
    }
  
    add(){
      this.dialog.open(AddIdeaComponent,{ disableClose: true, height:'580px',width:'570px'});
      this.dialog.afterAllClosed.subscribe((open: any) => {
        this.getAll();
      });
    }
  
    edit(ele:any) {
      const dialogRef= this.dialog.open(EditIdeaComponent,{ disableClose: true, height:'580px', width:'600px',
      data:ele });
      this.dialog.afterAllClosed.subscribe((open: any) => {
        this.getAll();
      });
    }

    created : any [] = [];

    getAll() {
     
        this.ideaService.getAll().subscribe((response:any) => {
          console.log(response);
          this.created = response.data;
          this.dataSource = new MatTableDataSource(response.data);
        }, (error) => {
          console.log(error);
        });
  }
  
  update(ele:any) {
    this.ideaService.update([ele]).subscribe((response:any) => {
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
        this.ideaService.delete([ele]).subscribe(
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

  detail(){
    this.dialog.open(ViewStatusComponent,{disableClose:true, height:'350px', width:'750px'});
    this.dialog.afterAllClosed.subscribe(()=>{
    this.getAll();
   });
    
  }

  comments(ele:any){
    this.dialog.open(ViewCommentsComponent,{disableClose:true, height:'350px', width:'750px', data:ele});
    this.dialog.afterAllClosed.subscribe(()=>{
    this.getAll();
   });
    
  }

  Emp: any = [];
  getUser() {

    this.AzureUserService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.Emp = response;
        this.matchIdAndCreatedBy();
      },

      (error) => {
        console.log(error);
      }

    );

  }

  matchIdAndCreatedBy() {
    for (const entry of this.created) {
      const matchingUser = this.Emp.find(

        (user: any) => user.id === entry.createdBy
      );
      console.log('sandeepMB', matchingUser);
      if (matchingUser) {

        console.log('Matching User:', matchingUser.displayName);
        // Display the displayName or perform further operations with the matchingUser object
      } else {
        console.log('User not found');
      }
    }

  }

  getDisplayName(createdBy: any): string {

    const matchingUser = this.Emp.find((user: any) => user.id === createdBy);

    return matchingUser ? matchingUser.displayName : '';

  }

}
