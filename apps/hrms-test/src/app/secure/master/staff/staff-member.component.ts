import { Component, OnInit } from '@angular/core';
import { Branch } from '@admin/core/models/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { MasterService } from '@admin/core/services/master.service';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrl: './staff-member.component.css',
})

export class StaffMemberComponent implements OnInit {

  branches: Branch[]            = [];
  branch: Branch                = {};
  selectedBranch: Branch[]      = [];
  submitted: boolean            = false;
  cols: any[]                   = [];
 
  loading: boolean   = false;
  selectAll: boolean = false;
  selectedItem!: Branch[];
  totalRecords!: number;
  
  constructor(private masterService: MasterService, private messageService: MessageService) { }

  ngOnInit() {
      
      //// TABLE HEADER /////
      this.cols = [
          { field: 'staff_no', header: 'Staff No', checkbox : false },
          { field: 'first_name', header: 'First Name', checkbox : false },
          { field: 'last_name', header: 'Last Name', checkbox : false },
          { field: 'gender', header: 'Gender', checkbox : false },
          { field: 'job_title', header: 'Job Title', checkbox : false },
      ];
      this.loading = true;
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

    console.log("event",event)
      this.loading = true;
      setTimeout(() => {
        this.masterService.getStaff(event).subscribe((data : any) => {
            console.log("this.branches>>>",data)
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
}
