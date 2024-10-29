import { Component, OnDestroy, OnInit } from '@angular/core';
import { Branch } from '@admin/core/models/product';
import { Table } from 'primeng/table';
import { MasterService } from '@admin/core/services/master.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})

export class StudentListComponent implements OnInit , OnDestroy{

    branches: Branch[]            = [];
    branch: Branch                = {};
    selectedBranch: Branch[]      = [];
    submitted: boolean            = false;
    cols: any[]                   = [];
    
    loading    : boolean   = false;
    selectAll  : boolean = false;
    selectedItem!: Branch[];
    totalRecords!: number;
    LoadModel  : boolean = false;
    number     : any;
    intervalId : any;
    userData   : any;
    
    constructor(private masterService: MasterService) { }
  
    ngOnInit() {
        //// TABLE HEADER /////
        this.cols = [
            { field: 'student_no', header: 'Student No', checkbox : false },
            { field: 'name', header: 'Name', checkbox : false },
            { field: 'email', header: 'email', checkbox : false },
            { field: 'gender', header: 'Gender', checkbox : false },
            { field: 'allow', header: 'Fess', checkbox : false },
            { field: 'bal', header: 'Bal', checkbox : false },
        ];
        this.loading = true;
        //this.getPunchDetails();
    }
  
    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.branches.length; i++) {
            if (this.branches[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
  
  
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
  
    loadCustomers(event: any) {  
        this.loading = true;
        setTimeout(() => {
          this.masterService.getStudent(event).subscribe((data : any) => {
              this.branches  = data.result
              this.totalRecords = data.totalentries;
              this.loading      = false;
          });
        }, 10);
    }
  
    onSelectionChange(value = []) { 
        this.selectAll    = value.length === this.totalRecords;
        this.selectedItem = value;
    }
  
    onSelectAllChange(event: any) {
        const checked = event.checked;
        if (checked) {
            this.masterService.getStaff().subscribe((data) => {
                this.selectAll = true;
            });
        } else {
            this.selectedItem = [];
            this.selectAll = false;
        }
    }

    getPunchDetails() { 
        let deviceId   = localStorage.getItem('deviceNo'); 
        this.LoadModel = false;

        this.intervalId = setInterval(async () => {
            await this.masterService.getFeesSatus(deviceId).subscribe((data : any) =>{
                if(data?.showPopup == 'True'){
                    this.userData = data; 
                    if(this.userData?.showPopup == 'True'){
                     this.LoadModel = true;  
                    }
                }
            })
         }, 2000);
    }

    ngOnDestroy() {
        this.stopInterval();
      }

    stopInterval() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null; // Optional: Clear the ID
        }
    }

  }