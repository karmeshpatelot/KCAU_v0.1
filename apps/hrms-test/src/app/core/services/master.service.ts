import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/hrms-test/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MasterService {

    apiBaseURL = environment.apiBaseURL;
    constructor(private http: HttpClient) { }

    getStaff(params?: any){
        let pageNo         = params.first;
        let entriesPerPage = params.rows;
        let globalFilter   = params.globalFilter;
        let url = this.apiBaseURL+'PostStaffsData?staffNo='+globalFilter+'&entriesPerPage='+entriesPerPage+'&pageNo='+pageNo
        return this.http.get(url);
    }

    getStaffDetails(Filter : any){
        let url = this.apiBaseURL+'PostStaffsData?staffNo='+Filter+'&entriesPerPage=1&pageNo=1';
        return this.http.get(url);
    }

    getStudentDetails(Filter : any){
        let url = this.apiBaseURL+'PostStudentsData?studentNo='+Filter+'&entriesPerPage=1&pageNo=1';
        return this.http.get(url);
    }

    getStudent(params?: any){
        let pageNo         = params.first;
        let entriesPerPage = params.rows;
        let globalFilter   = params.globalFilter; 
        let url = this.apiBaseURL+'PostStudentsData?studentNo='+globalFilter+'&entriesPerPage='+entriesPerPage+'&pageNo='+pageNo
        return this.http.get(url);
    }

    getAttendances(userNo:any,month:any,type: any) {
        return this.http.get<any>(this.apiBaseURL+'GetAttendances?username='+userNo+'&month='+month+'&type='+type)
            .toPromise()
            .then(res => res as any)
            .then(data => data);
    }

     getFeesSatus(deviceId:any) : Observable<any> {
        let data =  this.http.get<any>(this.apiBaseURL+'CheckFeesStatus?deviceId='+deviceId);
        return data;
    }

    getStudentFilter(){
        let url = this.apiBaseURL+'GetStudentsForFilter';
        return this.http.get(url);
    }

    getStudentWiseAttendances(params?: any){
        let date       = params.month.split('-');
        let month      = date[1];
        let year       = date[0];
        let filterDate = params.date;
        
        let student_no = params.student.userName;
        let url = this.apiBaseURL+'StudentReport?StudentNo='+student_no+'&Month='+month+'&Year='+year+'&Date='+filterDate
        return this.http.get(url);
    }


    getStudentWiseCountAttendances(){
        let url = this.apiBaseURL+'DayWiseAttendance'
        return this.http.get(url);
    }

    getLoginLog(params?: any){
        console.log("params.month",params)
        let date       = params.date;
        let url = this.apiBaseURL+'GetLoginReport?date='+date
        return this.http.get(url);
    }

    getChartReport(){
        let url = this.apiBaseURL+'DashboardCounts'
        return this.http.get(url);
    }

    deviceConfig(params?: any){
        let device = localStorage.getItem('deviceId');
        console.log(">>>",device)
        let url = this.apiBaseURL+'AddDeviceConfigue?DeviceId='+device+'&Location='+params.mainType.key+'&Type='+params.subType.key
        return this.http.get(url);
    }

    deviceConfigDelete(){
        let device = localStorage.getItem('deviceId');
        console.log(">>><<<<<",device)
        let url = this.apiBaseURL+'DeleteDeviceConfig?DeviceId='+device
        return this.http.get(url);
    }

    getGetStudent(){
        return this.http.get<any>('assets/demo/data/branch.json');
    }
}
