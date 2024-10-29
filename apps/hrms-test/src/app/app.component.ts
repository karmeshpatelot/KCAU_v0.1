import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    
    activeDate: any;

    constructor(private primengConfig: PrimeNGConfig,public route : Router, private routes: ActivatedRoute) { }

    ngOnInit() {
    
        this.primengConfig.ripple = true;
        let date  = new Date().getDate();
        let month = new Date().getMonth() +  1;
        let year  = new Date().getFullYear();

        this.activeDate = year+'-'+month+'-'+date;
        let licDate = '2024-11-15';
        if(this.activeDate > licDate){
          this.route.navigate(['lic']);
        }
    }
}
