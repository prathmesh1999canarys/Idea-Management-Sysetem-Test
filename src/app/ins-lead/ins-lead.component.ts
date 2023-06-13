import { Component } from '@angular/core';

@Component({
  selector: 'app-ins-lead',
  templateUrl: './ins-lead.component.html',
  styleUrls: ['./ins-lead.component.css']
})
export class InsLeadComponent {

  sideMenu: any = [

    { name: 'Dashboard', route: '/dashboard/all', icon: 'dashboard' },
    { name: 'Admin Comment List', route: 'adminlist', icon: 'list' },
    { name: 'Idea List', route: 'list', icon: 'list' }

  ];
}
