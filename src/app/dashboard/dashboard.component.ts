import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';

import { MatTableDataSource } from '@angular/material/table';

import { Chart } from 'chart.js';
import { ChartOptions } from 'chart.js';
import chart from 'chart.js/auto';
import { DashBoardServiceService } from 'src/app/services/dash-board-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
}
