import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
baseUrl = 'https://localhost:44396/api/Idea'; 

  constructor(private http: HttpClient, private authService: MsalService) { }


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
  return  this.http.delete(`${this.baseUrl}/Delete`, {body:element});
 }

 public getStatus() {
  return this.http.get(`${this.baseUrl}/GetDecision`);
  }
 }



  