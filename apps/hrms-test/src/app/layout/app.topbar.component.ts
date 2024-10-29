import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "@admin/layout/service/app.layout.service";
import { Router } from '@angular/router';
import { MasterService } from '@admin/core/services/master.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrl: './app.topbar.component.css',
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];
    filterData     : FormGroup<object> | any;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    profileView: boolean = false;
    userProfile: any;
    sidebarVisible: boolean = false;

    categories: any[] = [
        { name: 'Campus', key: 'campus' },
        { name: 'Lecture', key: 'lecture' }
    ];

    subcategories: any[] = [
        { name: 'Entry', key: 'IN' },
        { name: 'Exit', key: 'OUT' }
    ];

    er_No    = localStorage.getItem('er_no');
    type     = localStorage.getItem('type');
    mainType = localStorage.getItem('maintype') ?? '';

    constructor(public layoutService: LayoutService,public router : Router,public masterService : MasterService,private toastr: ToastrService) { }

    ngOnInit(): void {
        this.filterData = new FormGroup({
            mainType   : new FormControl(''),
            subType   : new FormControl(''),
          })
    }

    logoutData(){
        localStorage.removeItem('er_no');
        localStorage.removeItem('Type');
        this.stopPuch();
        this.router.navigate(['/auth/login']);
    }

    getProfileData(){

        if(this.type == 'student'){
            this.masterService.getStudentDetails(this.er_No).subscribe((res : any) => {
                this.userProfile = res.result[0];
            })
        }else{
            this.masterService.getStaffDetails(this.er_No).subscribe((res : any) => {
                console.log("userProfile",this.userProfile);
                this.userProfile = res.result[0];
            })
        }
        
    }

    openModel(){
        this.getProfileData();
        this.profileView = true;
    }

    storeData(){
        this.masterService.deviceConfig(this.filterData.value).subscribe((res : any) => {
            if(res.status){
                this.toastr.success('Attendace Puch Start');
            }else{
                this.toastr.error('Attendace Puch Not Start'); 
            }      
        })

        localStorage.setItem('maintype',this.filterData.value.mainType.key);
        localStorage.setItem('subtype',this.filterData.value.subType.key);
        this.mainType = this.filterData.value.mainType.key;  
        this.sidebarVisible = false   
    }

    stopPuch(){
        this.masterService.deviceConfigDelete().subscribe((res : any) => {
            console.log("userProfile",res);
            this.toastr.success('Attendace Puch Stop');
        })

        localStorage.removeItem('maintype');
        localStorage.removeItem('subtype');
        localStorage.removeItem('login');
        this.mainType = '';
        this.filterData.value = {};
        this.sidebarVisible = false
    }
}
