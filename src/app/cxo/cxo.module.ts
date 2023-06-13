import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import {
    MsalGuard, MsalBroadcastService, MsalService,
    MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent, MsalModule, MsalInterceptor, MsalInterceptorConfiguration, MSAL_INTERCEPTOR_CONFIG
} from '@azure/msal-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';




import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { GuardedComponent } from '../guarded/guarded.component';
import { loginRequest, msalConfig, protectedResources } from '../auth-config';

import { CxoRoutingModule } from './cxo-routing.module';
import { CxoComponent } from './cxo.component';
import { AddCxoRemarksComponent } from './add-cxo-remarks/add-cxo-remarks.component';
import { EditCxoRemarksComponent } from './edit-cxo-remarks/edit-cxo-remarks.component';
import { ListCxoRemarksComponent } from './list-cxo-remarks/list-cxo-remarks.component';
import { ViewCxoRemarksComponent } from './view-cxo-remarks/view-cxo-remarks.component';
import { NgModule } from '@angular/core';
import { NewCxoRemarksComponent } from './new-cxo-remarks/new-cxo-remarks.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from '../sidebarModule/shared.module';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';

@NgModule({
  declarations: [
      AddCxoRemarksComponent,
      EditCxoRemarksComponent,
      ViewCxoRemarksComponent,
      ListCxoRemarksComponent,
      NewCxoRemarksComponent,
      CxoComponent,
      AlertPopUpComponent,
    ],
  imports: [
    CommonModule,
    CxoRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    //MatOption,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    SharedModule
  ]
})
export class CxoModule { }
