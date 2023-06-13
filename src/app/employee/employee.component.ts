import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  sideMenu: any = [

    { name: 'Dashboard', route: '/dashboard/all', icon: 'dashboard' },

    { name: 'Idea List', route: 'idealist', icon: 'list' }

  ];
}
