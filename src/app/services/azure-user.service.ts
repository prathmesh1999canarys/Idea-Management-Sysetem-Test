import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs/internal/Observable';


interface User{
  id:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class AzureUserService {

  baseUrl = 'https://localhost:44396/api/AzureAD';

constructor(private http: HttpClient, private authService: MsalService) { }

public getAll(){
  return this.http.get(`${this.baseUrl}/GetADUsers`);
}

public getUser(){
  return this.http.get<User[]>(`${this.baseUrl}/GetADUsers`);
}

public getADGroupUsers(groupName: string): Observable<User[]> 
{
  const params = new HttpParams().set('groupName', groupName);
  return this.http.get<User[]>(`${this.baseUrl}/GetADGroupUsers`, { params });
}

}
