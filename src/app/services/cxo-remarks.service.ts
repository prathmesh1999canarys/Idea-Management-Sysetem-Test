import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class CXORemarksService {

  baseUrl = 'https://localhost:44396/api/CXO_Remarks';

  bu_remarks_id: number = 0;

  temp: any = null;

  constructor(private http: HttpClient, private authService: MsalService) { }

  public getAll() {
    return  this.http.post(`${this.baseUrl}/GetByFilter`,null);
     }

     public getNoCxoComments() {
      
      return  this.http.get(`${this.baseUrl}/GetNoCxoComments`);
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
