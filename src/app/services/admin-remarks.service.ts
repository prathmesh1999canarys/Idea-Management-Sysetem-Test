import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRemarksService {

  baseUrl = 'https://localhost:44396/api/Admin_Remarks';

  idea_id: number =0;
  temp:any =null;

  constructor(private http: HttpClient, private authService: MsalService) { }

public getNoAdminRemarks(){
  return  this.http.post(`${this.baseUrl}/GetNoAdminRemarks`,null);
}

  public getAll() {
 return  this.http.post(`${this.baseUrl}/GetByFilter`,null);
  }
 
  public create(element:any) {
    return  this.http.post(`${this.baseUrl}/Create`,element);
  }
  
   public update(element:any){
    return  this.http.put(`${this.baseUrl}/Update`,element);
   }
  
   public delete(element:[number]){
    return  this.http.delete(`${this.baseUrl}/Delete/`, {body:element});
   }
}
