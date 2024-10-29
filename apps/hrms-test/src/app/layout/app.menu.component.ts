import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '@admin/layout/service/app.layout.service';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Master',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Staff', icon: 'pi pi-fw pi-users', routerLink: ['/master/staff'] },
                    { label: 'Student', icon: 'pi pi-fw pi-user-plus', routerLink: ['/master/student'] },
                  
                ]
            },
            {
                label: 'Report',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Attedance Log', icon: 'pi pi-fw pi-list', routerLink: ['/master/report'] },
                    { label: 'Login Log', icon: 'pi pi-fw pi-clock', routerLink: ['/master/login-report'] }                   
                    
                ]
            },         
        ];
    }
}
