import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class BuHeadRemarksService {

  baseUrl = 'https://localhost:44396/api/BU_Remarks';

  adminremark_id: number = 0;

  temp: any = null;

  constructor(private http: HttpClient, private authService: MsalService) { }

  public getAll() {
    return this.http.post(`${this.baseUrl}/GetByFilter`, null);
  }

  public getNoBuRemarksAsync() {
    return this.http.post(`${this.baseUrl}/GetNoBuRemarksAsync`, null);
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
