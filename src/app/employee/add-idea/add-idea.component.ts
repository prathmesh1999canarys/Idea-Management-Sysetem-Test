import { HttpClient } from '@angular/common/http';
import { Component,ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { BusinessUnitService } from 'src/app/services/business-unit.service';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent {

  datasource:any;

  localAccountId :any;

  @ViewChild('addForm') addForm!: NgForm
  data= {
    "id": 0,
    "bU_Id":0,
    "problem": '',
    "solution": '',
    "remarks": '',
    "area": '',
    "status": '',
    "potentialCustomers":'',
    "workFlowStatus":'',
    "businessUnitBU_Name":'',
    "createdBy": '',
    "updatedBy": '',

  }

  constructor(private http: HttpClient, private authService: MsalService,  
    private ideaService: IdeaService,
    private businessService:BusinessUnitService, @Inject(MAT_DIALOG_DATA) public stag:any) {
  
  }

ngOnInit()
{
this.getAllUnits();
this.getUserAccount();

}  
// getUserAccount() {

//   var user = this.authService.instance.getAllAccounts();
//   console.log('sandeep',user);

//   this.localAccountId = user.map((user:any)=> user.localAccountId);
//   console.log('sandeep', this.localAccountId);

//   this.data.createdBy = this.localAccountId;
//   console.log('sandeep', this.data.createdBy)

//   this.data.updatedBy = this.localAccountId;
//   console.log('sandeep', this.data.updatedBy)
// }

getUserAccount() {

  var user = this.authService.instance.getAllAccounts();

  // console.log('user:', user);
  if (user && user.length > 0 && typeof user[0].name === 'string') {

    if (user[0].idTokenClaims && user[0].idTokenClaims.oid) {
      this.localAccountId = user[0].idTokenClaims.oid;
      // console.log('this.id:', this.id);

      this.data.createdBy = this.localAccountId;
      // console.log('this.data.createdBy:', this.data.createdBy);
      this.data.updatedBy = this.localAccountId;
      // console.log('this.data.updatedBy:', this.data.updatedBy);

    }

  }

}

add(ele:any) {
  console.log([ele]);

  ele.updatedBy = this.localAccountId;
  console.log('shanthi',ele.updatedBy);
  
    ele.createdBy = this.localAccountId;
    console.log('shanthii',ele.createdBy);


      this.ideaService.create([ele]).subscribe((response:any) => {
        console.log(response);      

        console.log('Response data: ', response);

        if(response && response.createdBy){
          this.data.createdBy = response.createdBy;
        }

        console.log('updated this.data : ', ele)

      }, (error) => {
        console.log(error);
      });
  }

  getAllUnits(){
    this.businessService.getUnits().subscribe((response: any) =>
    {
      console.log(response);
      this.datasource = response;})
    }
}
