import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaStatusService {

  //baseUrl = 'https://localhost:44396/api/IdeaStatus';

  constructor(private http: HttpClient, private authService: MsalService) { }


 public get() {
return  this.http.post(`https://localhost:44396/api/IdeaStatus/Get`,null);
 }
}
