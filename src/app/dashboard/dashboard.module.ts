import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BuHeadDashboardComponent } from './bu-head-dashboard/bu-head-dashboard.component';
import { CxoDashboardComponent } from './cxo-dashboard/cxo-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    BuHeadDashboardComponent,
    CxoDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule

  ]
})
export class DashboardModule { }
