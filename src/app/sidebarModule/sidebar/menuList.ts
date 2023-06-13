export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = '',
    ) { }
}


export const mainMenu =[
    new MenuItem('CXO','cxo', 'CXO', 'account_circle'),
    new MenuItem('BU-Head','bu-head', 'BU-Head', 'account_circle'),
    new MenuItem('INS-Lead','ins-lead', 'INS-Lead', 'account_circle'),
    new MenuItem('Employee','employee', 'Employee', 'account_circle'),
    new MenuItem('BU','bu', 'BU', 'account_circle'),  
]

export const dashboardMenu=[
    new MenuItem ('Dashboard','dashboard','Dashboard','reduce_capacity')
]