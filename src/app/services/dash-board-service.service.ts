import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import chart from 'chart.js/auto';


@Injectable({
  providedIn: 'root'
})
export class DashBoardServiceService {

adminRejectionReason = 'https://localhost:44396/api/Admin_Remarks/dashBoard/AdminRejectionReason';
buRejectionReason = 'https://localhost:44396/api/BU_Remarks/dashBoard/BuRejectionReason';
buIdeaCount = 'https://localhost:44396/api/Idea/dashBoard/BuWiseIdeaCount';
cxoRejectionReason = 'https://localhost:44396/api/CXO_Remarks/dashBoard/CxoRejectionReason';
totaSubmittedUrl = 'https://localhost:44396/api/Idea/dashBoard/totalSubmittedIdea';
ideaStatusUrl = 'https://localhost:44396/api/Idea/dashBoardIdeaStatus';
adminStatusUrl = 'https://localhost:44396/api/Admin_Remarks/dashBoard/AdminStatus';
buStatusUrl = 'https://localhost:44396/api/BU_Remarks/dashBoard/BuStatus';
cxoStatusbaseUrl = 'https://localhost:44396/api/CXO_Remarks/dashBoard/CxoStatus';
ideaAreaUrlBar = 'https://localhost:44396/api/Idea/dashBoardIdeaArea';

constructor(private http: HttpClient, private authService: MsalService) { }

public getAllBuideaCount() {
  return this.http.get(`${this.buIdeaCount}/Get`);
}

public getAdminRejectionReason() {
  return this.http.post(`${this.adminRejectionReason}/Get`, null);
}

public getBuRejectionReason() {
  return this.http.post(`${this.buRejectionReason}/Get`, null);
}

public getCxoRejectionReason() {
  return this.http.post(`${this.cxoRejectionReason}/Get`, null);
}

public getTotalIdea() {
  return this.http.get(`${this.totaSubmittedUrl}/Get`);
}

public getIdeaStatus() {
  return this.http.post(`${this.ideaStatusUrl}/Get`, null);
}

public getAdminStatus() {
  return this.http.post(`${this.adminStatusUrl}/Get`, null);
}

public getBuStatus() {
  return this.http.post(`${this.buStatusUrl}/Get`, null);
}

public getCXOStatus() {
  return this.http.post(`${this.cxoStatusbaseUrl}/Get`, null);
}

public getIdeaArea() {
  return this.http.post(`${this.ideaAreaUrlBar}/Get`, null);
}


}
