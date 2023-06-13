import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import {MatSelectModule} from '@angular/material/select';



import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';

import { loginRequest, msalConfig, protectedResources } from './auth-config';
import { ViewWeatherForcastComponent } from './view-weather-forcast/view-weather-forcast.component';
import { AddWeatherForcastComponent } from './add-weather-forcast/add-weather-forcast.component';
import { EditWeatherForcastComponent } from './edit-weather-forcast/edit-weather-forcast.component';
import { AddCxoRemarksComponent } from './cxo/add-cxo-remarks/add-cxo-remarks.component';
import { EditCxoRemarksComponent } from './cxo/edit-cxo-remarks/edit-cxo-remarks.component';
import { ViewCxoRemarksComponent } from './cxo/view-cxo-remarks/view-cxo-remarks.component';
import { ListCxoRemarksComponent } from './cxo/list-cxo-remarks/list-cxo-remarks.component';
import { NewCxoRemarksComponent } from './cxo/new-cxo-remarks/new-cxo-remarks.component';
import { SharedModule } from './sidebarModule/shared.module';
/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication(msalConfig);
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return {
        interactionType: InteractionType.Popup,
        authRequest: loginRequest
    };
}

  
  export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read', 'mail.read']);
    protectedResourceMap.set('https://localhost:44396/api', ['api://c12e5eb8-cfc7-42d9-b094-897c81d70ce4/ReadWriteAccess']);
  
    return {
      interactionType: InteractionType.Popup,
      protectedResourceMap
    };
  }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GuardedComponent,
        ViewWeatherForcastComponent,
        AddWeatherForcastComponent,
        EditWeatherForcastComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        SharedModule,
        // Initiate the MSAL library with the MSAL configuration object
    MsalModule
    .forRoot(new PublicClientApplication(msalConfig),
    {
      // The routing guard configuration. 
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: protectedResources.todoListApi.scopes
      }
    },
    {
      // MSAL interceptor configuration.
      // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        [protectedResources.todoListApi.endpoint, protectedResources.todoListApi.scopes]
      ])
    })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true,
          },
        {
            provide: MSAL_INSTANCE,
            useFactory: MSALInstanceFactory
        },
        {
            provide: MSAL_GUARD_CONFIG,
            useFactory: MSALGuardConfigFactory
        },
        {
            provide: MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory
          },
        // { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
        MsalService,
        MsalGuard,
        MsalBroadcastService
    ],
    bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule { }
