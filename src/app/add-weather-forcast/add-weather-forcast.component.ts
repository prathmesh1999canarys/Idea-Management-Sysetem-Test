import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { WeatherForcastService } from '../services/weather-forcast.service';

@Component({
  selector: 'app-add-weather-forcast',
  templateUrl: './add-weather-forcast.component.html',
  styleUrls: ['./add-weather-forcast.component.scss']
})
export class AddWeatherForcastComponent {

  data= {
    "id": 0,
    "deleted": false,
    "temperatureC": 0,
    "temperatureF": 0,
    "summary": '',
    "name": ''
  }

  constructor(private http: HttpClient, private authService: MsalService,  
    private weatherService: WeatherForcastService) {

  }
  add(ele:any) {
 console.log([ele]);
 
      this.weatherService.create([ele]).subscribe((response:any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
  }
}
