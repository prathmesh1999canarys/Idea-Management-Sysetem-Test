import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';

import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';
import { ViewWeatherForcastComponent } from './view-weather-forcast/view-weather-forcast.component';
import { ViewCxoRemarksComponent } from './cxo/view-cxo-remarks/view-cxo-remarks.component';
import { CxoComponent } from './cxo/cxo.component';
import { ListCxoRemarksComponent } from './cxo/list-cxo-remarks/list-cxo-remarks.component';
import { IdeaListComponent } from './employee/idea-list/idea-list.component';
import { ViewAdminRemarksComponent } from './ins-lead/view-admin-remarks/view-admin-remarks.component';
import { ListAdminRemarksComponent } from './ins-lead/list-admin-remarks/list-admin-remarks.component';
import { ViewBuRemarksComponent } from './bu-head/view-bu-remarks/view-bu-remarks.component';
import { ListBuRemarksComponent } from './bu-head/list-bu-remarks/list-bu-remarks.component';
import { AdminCommentedListComponent } from './ins-lead/admin-commented-list/admin-commented-list.component';
import { ListBusinessUnitComponent } from './bu/list-business-unit/list-business-unit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { BuHeadDashboardComponent } from './dashboard/bu-head-dashboard/bu-head-dashboard.component';
import { CxoDashboardComponent } from './dashboard/cxo-dashboard/cxo-dashboard.component';



/**
 * MSAL Angular can protect routes in your application using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [
    {
        path: 'guarded',
        component: ViewWeatherForcastComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'test',
        component: GuardedComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        // Needed for handling redirect after login
        path: 'auth',
        component: MsalRedirectComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'emp-dash',
        component: EmployeeDashboardComponent
    },
    {
        path: 'admin-dash',
        component: AdminDashboardComponent
    },
    {
        path: 'bu-dash',
        component: BuHeadDashboardComponent
    },
    {
        path: 'cxo-dash',
        component: CxoDashboardComponent
    },
    { path: 'cxo', loadChildren: () => import('./cxo/cxo.module').then(m => m.CxoModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'ins-lead', loadChildren: () => import('./ins-lead/ins-lead.module').then(m => m.InsLeadModule) },
    { path: 'bu-head', loadChildren: () => import('./bu-head/bu-head.module').then(m => m.BuHeadModule) },
    { path: 'bu', loadChildren: () => import('./bu/bu.module').then(m => m.BuModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // Don't perform initial navigation in iframes or popups
        initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
