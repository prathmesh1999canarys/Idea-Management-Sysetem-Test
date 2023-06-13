import { Component } from '@angular/core';

@Component({
  selector: 'app-bu',
  templateUrl: './bu.component.html',
  styleUrls: ['./bu.component.css']
})
export class BuComponent {

  sideMenu: any = [

    { name: 'BU List', route: 'list', icon: 'list' }

  ];

}
