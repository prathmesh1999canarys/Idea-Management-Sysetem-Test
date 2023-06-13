import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { protectedResources } from '../auth-config';
import { WeatherForcastService } from '../services/weather-forcast.service';
import { CXORemarksService } from '../services/cxo-remarks.service';

@Component({
    selector: 'app-guarded',
    templateUrl: './guarded.component.html',
    styleUrls: ['./guarded.component.css']
})
export class GuardedComponent implements OnInit {

    todoListEndpoint: string = protectedResources.todoListApi.endpoint+'/Gett';
    profile:any;

    constructor(private http: HttpClient, private authService: MsalService,
      private weatherService: WeatherForcastService) {}

    ngOnInit(): void {
    }

  getUsers() {

  this.weatherService.getAll().subscribe(
          (response:any) => console.log(response),
          (error:any) => console.log(error)
        );
  
  }
}
  

   


