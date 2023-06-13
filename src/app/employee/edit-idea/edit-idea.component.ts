import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessUnitService } from 'src/app/services/business-unit.service';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.css']
})
export class EditIdeaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private ideaService: IdeaService,
  private businessService:BusinessUnitService) {}

  datasource:any;

  ngOnInit()
{
this.getAllUnits();
} 

getAllUnits(){
  this.businessService.getUnits().subscribe((response: any) =>
  {
    console.log(response);
    this.datasource = response;})
  
  }

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.ideaService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }

}
