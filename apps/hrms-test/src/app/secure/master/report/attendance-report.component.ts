import { MasterService } from '@admin/core/services/master.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrl: './attendance-report.component.css',
})

export class AttendanceReportComponent implements OnInit {
  
  loadingReport        : boolean = false;
  sidebarVisible : boolean = false;
  filterData     : FormGroup<object> | any;
  studentList    : any;
  attDataList    : any;
  attCountData   : any;
  messages = [{ severity: 'info', detail: 'Please Month and Student' }];
  name    : any;
  absent  : any;
  present : any;
  userType   = localStorage.getItem('type');

  constructor(private masterService: MasterService){} 
  
  ngOnInit(): void {

     /// LOGIN FORM DETAILS ///
     this.filterData = new FormGroup({
      month   : new FormControl('',Validators.required),
      date    : new FormControl(''),
      student : new FormControl('',Validators.required),
    })
    this.getCountReport()
    this.getStudentList();
  }

  getStudentList(){
      this.masterService.getStudentFilter().subscribe((data : any) => { 
        this.loadingReport = false;
          this.studentList = data.data; 
          
      });
  }

  getAttendaceReport(){
    this.sidebarVisible = false;
    setTimeout(() => {
      this.masterService.getStudentWiseAttendances(this.filterData.value).subscribe((data : any) => {
        this.name    = data.data.name
        this.absent  = data.data.absent
        this.present = data.data.present
        this.attDataList = data.data.attendances
        this.loadingReport = true;
      });
    }, 10);
  }

  getCountReport(){
      this.masterService.getStudentWiseCountAttendances().subscribe((data : any) => {
        console.log("data",data.data)
        this.attCountData = data.data
      });
    }


}
