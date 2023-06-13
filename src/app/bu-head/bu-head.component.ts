import { Component } from '@angular/core';

@Component({
  selector: 'app-bu-head',
  templateUrl: './bu-head.component.html',
  styleUrls: ['./bu-head.component.css']
})
export class BuHeadComponent {
  sideMenu: any = [

    { name: 'Dashboard', route: '/dashboard/all', icon: 'dashboard' },

    { name: 'BU Comment List', route: 'bulist', icon: 'list' },

    { name: 'Admin Comment List', route: 'adminlist', icon: 'list' },

    { name: 'BU List', route: '/bu', icon: 'list' },

  ];

}
