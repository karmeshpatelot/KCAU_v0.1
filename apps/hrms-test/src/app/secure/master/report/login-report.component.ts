import { MasterService } from '@admin/core/services/master.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-report',
  templateUrl: './login-report.component.html',
  styleUrl: './login-report.component.css',
})

export class LoginReportComponent implements OnInit {
  
  loading        : boolean = false;
  sidebarVisible : boolean = false;
  filterData     : FormGroup<object> | any;
  studentList    : any;
  attDataList    : any;
  messages = [{ severity: 'info', detail: 'Please select Date' }];
  name: any;
  absent: any;
  present: any;

  constructor(private masterService: MasterService){} 
  
  ngOnInit(): void {
     /// LOGIN FORM DETAILS ///
     this.filterData = new FormGroup({
      date   : new FormControl('',Validators.required),
    })
  }


  getLoginReport(){
    this.sidebarVisible = false;
    setTimeout(() => {
      this.masterService.getLoginLog(this.filterData.value).subscribe((data : any) => {
        this.attDataList = data.data
        this.loading     = true;
      });
    }, 10);
  }

}
