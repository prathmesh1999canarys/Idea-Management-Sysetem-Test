import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() item:any;


  hidden: boolean = false;
  show : boolean = false;
  isExpanded: boolean = true;
  hide: boolean = false;
  collapse = this.isExpanded;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private router: Router) { }
}
