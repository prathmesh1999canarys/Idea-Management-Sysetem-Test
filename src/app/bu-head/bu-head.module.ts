import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuHeadRoutingModule } from './bu-head-routing.module';
import { BuHeadComponent } from './bu-head.component';
import { AddBuRemarksComponent } from './add-bu-remarks/add-bu-remarks.component';
import { EditBuRemarksComponent } from './edit-bu-remarks/edit-bu-remarks.component';
import { ListAdminRemarksComponent } from './list-admin-remarks/list-admin-remarks.component';
import { ListBuRemarksComponent } from './list-bu-remarks/list-bu-remarks.component';
import { ViewBuRemarksComponent } from './view-bu-remarks/view-bu-remarks.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../sidebarModule/shared.module';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';



@NgModule({
  declarations: [
    BuHeadComponent,
    AddBuRemarksComponent,
    EditBuRemarksComponent,
    ListAdminRemarksComponent,
    ListBuRemarksComponent,
    ViewBuRemarksComponent,
    AlertPopUpComponent
  ],
  imports: [
    CommonModule,
    BuHeadRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatOptionModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    SharedModule,
    
  ]
})
export class BuHeadModule { }
