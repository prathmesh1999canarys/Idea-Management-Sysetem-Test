import { Component} from '@angular/core';

@Component({
  selector: 'app-cxo',
  templateUrl: './cxo.component.html',
  styleUrls: ['./cxo.component.css']
})
export class CxoComponent{

    sideMenu: any = [

        { name: 'Dashboard', route: '/dashboard/all', icon: 'dashboard' },  

        { name: 'CXO Comment List', route: 'list', icon: 'list' },
    
        { name: 'List', route: 'new', icon: 'list' },
    
      ];

}
