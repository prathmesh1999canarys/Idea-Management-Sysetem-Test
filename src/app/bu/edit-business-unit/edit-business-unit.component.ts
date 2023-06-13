import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessUnitService } from 'src/app/services/business-unit.service';

@Component({
  selector: 'app-edit-business-unit',
  templateUrl: './edit-business-unit.component.html',
  styleUrls: ['./edit-business-unit.component.css']
})
export class EditBusinessUnitComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private buService: BusinessUnitService) {}

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.buService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }

}
