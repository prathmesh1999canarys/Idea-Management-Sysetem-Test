import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BusinessUnitService } from 'src/app/services/business-unit.service';

@Component({
  selector: 'app-add-business-unit',
  templateUrl: './add-business-unit.component.html',
  styleUrls: ['./add-business-unit.component.css']
})
export class AddBusinessUnitComponent {

  data= {
  "bU_Name": '',
  "bU_Description": '',
}

constructor(private http: HttpClient, private authService: MsalService,  
 private BuService: BusinessUnitService) {

}
add(ele:any) {
console.log([ele]);

   this.BuService.create([ele]).subscribe((response:any) => {
     console.log(response);
   }, (error) => {
     console.log(error);
   });
 
}

}
