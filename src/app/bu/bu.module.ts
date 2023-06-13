import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuRoutingModule } from './bu-routing.module';
import { BuComponent } from './bu.component';
import { ListBusinessUnitComponent } from './list-business-unit/list-business-unit.component';
import { AddBusinessUnitComponent } from './add-business-unit/add-business-unit.component';
import { EditBusinessUnitComponent } from './edit-business-unit/edit-business-unit.component';
import { ViewBusinessUnitComponent } from './view-business-unit/view-business-unit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../sidebarModule/shared.module';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';



@NgModule({
  declarations: [
    BuComponent,
    ListBusinessUnitComponent,
    AddBusinessUnitComponent,
    EditBusinessUnitComponent,
    ViewBusinessUnitComponent,
    AlertPopUpComponent
  ],
  imports: [
    CommonModule,
    BuRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,  
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    SharedModule
    
  ]
})
export class BuModule { }
