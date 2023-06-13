import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult, InteractionStatus } from '@azure/msal-browser';
import { createClaimsTable } from '../claim-utils';
import { mainMenu } from '../sidebarModule/sidebar/menuList';
import { AzureUserService } from '../services/azure-user.service';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';

interface User{
  id:string;
}

interface Position
{
  value:string;
  viewValue:string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Position[] = [
    { value: 'Employee', viewValue: 'Employee' },
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'BUHead', viewValue: 'BUHead' },
    { value: 'CXO', viewValue: 'CXO' }
  ];
  

loginDisplay = false;
displayedColumns: string[] = ['claim', 'value', 'description'];
dataSource: any = [];
loggedInUser:any;

name: string;
localAccountId: string;
employeeModuleVisible: boolean;
EmpId: any[] = [];
groupName: string;
selectedPosition: string;
AdminId: any[] = [];
BuId: any[] = [];
CxoId: any[] = [];
positionMatched: boolean;
matchedIds: any[] = [];

constructor(
private authService: MsalService,
private msalBroadcastService: MsalBroadcastService,
private azureuserService: AzureUserService,
private router: Router,
private groupService: GroupService
) {
this.name = "";
this.localAccountId = "";
this.employeeModuleVisible = true;
this.EmpId = [];
this.groupName = "";
this.selectedPosition = "";
this.AdminId = [];
this.BuId = [];
this.CxoId = [];
this.positionMatched = false;
this.matchedIds = [];
}

ngOnInit(): void {
this.msalBroadcastService.msalSubject$
.pipe(
  filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
)
.subscribe((result: EventMessage) => {
  const payload = result.payload as AuthenticationResult;
  this.authService.instance.setActiveAccount(payload.account);
});

this.msalBroadcastService.inProgress$
.pipe(
  filter((status: InteractionStatus) => status === InteractionStatus.None)
)
.subscribe(() => {
  this.setLoginDisplay();
  this.getClaims(this.authService.instance.getActiveAccount()?.idTokenClaims);
});

this.getUserAccount();
this.getGroupEmp(this.groupName);
this.getGroupBU(this.groupName);
this.getGroupAdmin(this.groupName);
this.getGroupCxo(this.groupName);
}

setLoginDisplay() {
this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
}

getClaims(claims: any) {
if (claims) {
const claimsTable = createClaimsTable(claims);
this.dataSource = [...claimsTable];
}
}

logLoggedInUser() {
const activeAccountId = this.authService.instance.getActiveAccount()?.homeAccountId;
this.azureuserService.getAll().subscribe(
(response: any) => {
  this.loggedInUser = response.find((user: any) => user.id === activeAccountId);
  // console.log(this.loggedInUser);
},
(error) => {
  console.log(error);
}
);
}

getUserAccount() {
const user = this.authService.instance.getAllAccounts();
console.log(user);

console.log(user);
if (user && user[0] && typeof user[0].name === 'string') {
this.name = user[0].name;
this.localAccountId = user[0].localAccountId;
console.log(this.localAccountId);
}
}

getGroupEmp(groupName: string) {
this.azureuserService.getADGroupUsers('Employee').subscribe(
(response: User[]) => {
  this.EmpId.push(...response.map((user) => user.id)); // Push IDs into the array
  console.log(this.EmpId);
},
(error) => {
  console.log(error);
}
);
}

getGroupAdmin(groupName: string) {
this.azureuserService.getADGroupUsers('Admin').subscribe(
(response: User[]) => {
  this.AdminId.push(...response.map((user) => user.id)); // Push IDs into the array
  console.log(this.AdminId);
},
(error) => {
  console.log(error);
}
);
}

getGroupBU(groupName: string) {
this.azureuserService.getADGroupUsers('BUHead').subscribe(
(response: User[]) => {
  this.BuId.push(...response.map((user) => user.id)); // Push IDs into the array
  console.log(this.BuId);
},
(error) => {
  console.log(error);
}
);
}

getGroupCxo(groupName: string) {
this.azureuserService.getADGroupUsers('CXO').subscribe(
(response: User[]) => {
  this.CxoId.push(...response.map((user) => user.id)); // Push IDs into the array
  console.log(this.CxoId);
},
(error) => {
  console.log(error);
}
);
}

onPositionChange(value: string) {
this.positionMatched = true;
this.groupService.loggedInUserGroupName = value;
console.log("loggedInUserGroupName");
console.log(this.groupService.loggedInUserGroupName);
}

matchPosition() {
this.matchedIds = [];

if (this.selectedPosition === 'Employee') {
// Match with localAccountId (Employee)
if (this.EmpId.length > 0) {
  const matchedId = this.EmpId.find((id: string) => id === this.localAccountId);
  if (matchedId) {
    this.matchedIds = [matchedId];
    this.positionMatched = true;
  } else {
    // No match found
    this.matchedIds = [];
    this.positionMatched = false;
  }
}
} else if (this.selectedPosition === 'Admin') {
// Match with HrId (HR)
if (this.AdminId.length > 0) {
  const matchedId = this.AdminId.find((id: string) => id === this.localAccountId);
  if (matchedId) {
    this.matchedIds = [matchedId];
    this.positionMatched = true;
  } else {
    // No match found
    this.matchedIds = [];
    this.positionMatched = false;
  }
}
} else if (this.selectedPosition === 'BUHead') {
// Match with BuId (BUHead)
if (this.BuId.length > 0) {
  const matchedId = this.BuId.find((id: string) => id === this.localAccountId);
  if (matchedId) {
    this.matchedIds = [matchedId];
    this.positionMatched = true;
  } else {
    // No match found
    this.matchedIds = [];
    this.positionMatched = false;
  }
}
} else if (this.selectedPosition === 'CXO') {
// Match with BuId (BUHead)
if (this.CxoId.length > 0) {
  const matchedId = this.CxoId.find((id: string) => id === this.localAccountId);
  if (matchedId) {
    this.matchedIds = [matchedId];
    this.positionMatched = true;
  } else {
    // No match found
    this.matchedIds = [];
    this.positionMatched = false;
  }
}
}
}

goToEmployee() {
this.router.navigate(['employee']);
}

goToAdmin() {
this.router.navigate(['ins-lead']);
}

goToBu() {
this.router.navigate(['bu-head']);
}

goToCxo() {
this.router.navigate(['cxo']);
}

sideMenu = mainMenu;

}
