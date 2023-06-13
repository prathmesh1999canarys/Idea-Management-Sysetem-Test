import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherForcastService } from '../services/weather-forcast.service';

@Component({
  selector: 'app-edit-weather-forcast',
  templateUrl: './edit-weather-forcast.component.html',
  styleUrls: ['./edit-weather-forcast.component.scss']
})
export class EditWeatherForcastComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private weatherService: WeatherForcastService) {}

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.weatherService.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }
}
