import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { AddWeatherForcastComponent } from '../add-weather-forcast/add-weather-forcast.component';
import { EditWeatherForcastComponent } from '../edit-weather-forcast/edit-weather-forcast.component';
import { WeatherForcastService } from '../services/weather-forcast.service';

@Component({
  selector: 'app-view-weather-forcast',
  templateUrl: './view-weather-forcast.component.html',
  styleUrls: ['./view-weather-forcast.component.scss']
})
export class ViewWeatherForcastComponent {

  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e','f']

  data= {
    "id": 0,
    "deleted": false,
    "temperatureC": '',
    "temperatureF": '',
    "summary": '',
    "name": 'any'
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private weatherService: WeatherForcastService) {

  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(AddWeatherForcastComponent,{ disableClose: true});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  edit(ele:any) {
    const dialogRef= this.dialog.open(EditWeatherForcastComponent,{ disableClose: true,
    data:ele });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  getAll() {
   
      this.weatherService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

update(ele:any) {
  this.weatherService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele:number) {
  console.log(ele);
  
  this.weatherService.delete([ele]).subscribe((response:any) => {
    console.log(response);
    this.getAll();
  }, (error) => {
    console.log(error);
  });

}

}
