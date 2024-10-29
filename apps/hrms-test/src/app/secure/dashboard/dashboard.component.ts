import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '@admin/layout/service/app.layout.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MasterService } from '@admin/core/services/master.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {

    subscription  !: Subscription;
    loading        : boolean = true;
    attendances    : any;
    listDialog     : boolean = false;
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        eventClick :  (info) => this.handleDateClick(info.event),
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: [
         { title: 'Meeting', start: new Date() }
        ],
    };
    events      : any
    eventsClass : any
    studentList : any;
    attType     : any;
    userType   = localStorage.getItem('type');

    // chart
    daily       : any;
    fees        : any;
    options     :  any;
    paidCount   : any    = 0;
    unPaidCount : any  = 0;
    presentCount: any = 0;
    absentCount : any  = 0;
    loadChart   : boolean = false;

    constructor(private masterService: MasterService, private toastr: ToastrService, public layoutService: LayoutService) { }

    ngOnInit() {
        this.chartReport();
        this.loadAttendances();
        this.loadClassAttendances();
        this.showCal(0);

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }

    handleDateClick(arg: any) {
       this.toastr.info(arg.id, arg.startStr);
    }
 
    loadAttendances() {
        this.loading = true;
        let userNo   = localStorage.getItem('er_no');
        let month    = new Date().getMonth() + 1;

        this.masterService.getAttendances(userNo,month,'campus').then((data: any) => {
            this.events = data.data
            this.loading = false;
        });
    }

    loadClassAttendances() {
        this.loading = true;
        let userNo   = localStorage.getItem('er_no');
        let month    = new Date().getMonth() + 1;

        this.masterService.getAttendances(userNo,month,'class').then((data: any) => {
            this.eventsClass = data.data
            this.loading = false;
        });
    }

    openNew() {
        this.listDialog = true;
        this.getStudentList();
    }

    hideDialog() {
        this.listDialog = false;
    }

    showCal(type: any) {

        setTimeout(() => {
            this.attType = type.index;
        }, 100);

    }

    getStudentList() {
        this.masterService.getGetStudent().subscribe((res: any) => {
            this.studentList = res.data;
            console.log("studentList", this.studentList);
        })
    }

    chartReport() {
        this.loadChart = false;
        this.masterService.getChartReport().subscribe((data: any) => {
            this.paidCount   =  data.data.paidCount
            this.unPaidCount  = data.data.unPaidCount
            this.presentCount = data.data.presentCount
            this.absentCount  = data.data.absentCount
            this.loadChart = true;

            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            
            this.daily = {
                labels: ['Present', 'Absent'],
                datasets: [
                    {
                        data: [this.presentCount, this.absentCount],
                        backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500')],
                    }
                ]
            };
    
            this.fees = {
                labels: ['Paid Fees', 'Unpaid Fees'],
                datasets: [
                    {
                        data: [this.paidCount, this.unPaidCount],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                    }
                ]
            };
    
        });
    }
    
}
