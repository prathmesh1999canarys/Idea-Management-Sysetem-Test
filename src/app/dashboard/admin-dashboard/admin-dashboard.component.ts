import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js';
import chart from 'chart.js/auto';
import { DashBoardServiceService } from 'src/app/services/dash-board-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  ideaStatus: any;
  displayedColumns: string[] = ['Status', 'Count'];
  data = {
    "Status": "",
    "Count": 0,
  };
  
  adminStatus: any;
  displayedColumns1: string[] = ['d'];
  data1 = {
    "count": 0,
  };
  
  buStatus: any;
  displayedColumns2: string[] = ['f'];
  data2 = {
    "count": 0
  };
  
  cxoStatus: any;
  displayedColumns3: string[] = ['h'];
  data3 = {
    "count": 0
  };
  
  totalIdea: any;
  displayedColumns4: string[] = ['i'];
  data4 = {
    "count": 0
  };
  
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: MsalService,
    private dashBoardService: DashBoardServiceService
  ) {}
  
  ngOnInit() {
    this.getIdea();
    this.getAdmin();
    this.getBu();
    this.getCXO();
    this.getAreawiseCount();
    this.getBuCount();
    this.getAdminRejection();
    this.getTotalIdea();
  }
  
  getTotalIdea() {
    this.dashBoardService.getTotalIdea().subscribe((response: any) => {
      console.log(response);
      this.totalIdea = response;
    }, (error) => {
      console.log(error);
    });
  }
  
  getIdea() {
    this.dashBoardService.getIdeaStatus().subscribe((response: any) => {
      console.log(response);
      this.ideaStatus = response;
    }, (error) => {
      console.log(error);
    });
  }
  
  getAdmin() {
    this.dashBoardService.getAdminStatus().subscribe((response: any) => {
      console.log(response);
      this.adminStatus = response;
    }, (error) => {
      console.log(error);
    });
  }
  
  getBu() {
    this.dashBoardService.getBuStatus().subscribe((response: any) => {
      console.log(response);
      this.buStatus = response;
    }, (error) => {
      console.log(error);
    });
  }
  
  getCXO() {
    this.dashBoardService.getCXOStatus().subscribe((response: any) => {
      console.log(response);
      this.cxoStatus = response;
    }, (error) => {
      console.log(error);
    });
  }
  
  getAreawiseCount() {
    this.dashBoardService.getIdeaArea().subscribe((response: any) => {
      console.log('response:', response);
      const area: any = response.map((t: any) => t.Area);
      const areacount: any = response.map((t: any) => t.count);
      this.getStatusA(area, areacount);
    });
  }
  
  getStatusA(businessUnit: Array<any>, buCount: Array<any>) {
    new chart("IdeaAreaWiseChart", {
      type: 'bar',
      data: {
        labels: businessUnit,
        datasets: [{
          label: 'Count',
          data: buCount,
          borderWidth: 0.5,
        }]
      }
    });
  }
  
  getBuCount() {
    this.dashBoardService.getAllBuideaCount().subscribe((response: any) => {
      console.log('response:', response);
      const businessUnit: any = response.map((t: any) => t.BU_Name);
      const buCount: any = response.map((t: any) => t.Count);
      this.getBuWiseIdeaCount(businessUnit, buCount);
    });
  }
  
  getBuWiseIdeaCount(businessUnit: Array<any>, buCount: Array<any>) {
    new chart("buwisePieChart", {
      type: 'pie',
      data: {
        labels: businessUnit,
        datasets: [{
          label: 'Count',
          data: buCount,
          borderWidth: 0.5,
        }]
      }
    });
  }
  
  getAdminRejection() {
    this.dashBoardService.getAdminRejectionReason().subscribe((response: any) => {
      console.log('response:', response);
      const rejectionReason: any = response.map((t: any) => t.RejectionReason);
      const rCount: any = response.map((t: any) => t.Count);
      this.getRejection(rejectionReason, rCount);
    });
  }
  
  getRejection(rejectionReason: Array<any>, rCount: Array<any>) {
    new Chart("rejectionReason", {
      type: 'pie',
      data: {
        labels: rejectionReason,
        datasets: [{
          label: 'Count',
          data: rCount,
          borderWidth: 0.5,
        }]
      }
    });

}
}
