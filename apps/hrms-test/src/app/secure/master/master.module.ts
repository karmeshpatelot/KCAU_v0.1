import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from '@admin/secure/master/master-routing.module';
import { StaffMemberComponent } from './staff/staff-member.component';
import { StudentListComponent } from './student/student-list.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { TableComponent } from '@hrms/libs';
import { MessageService } from 'primeng/api';
import { MasterService } from '@admin/core/services/master.service';
import { AttendanceReportComponent } from './report/attendance-report.component';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { LoginReportComponent } from './report/login-report.component';



@NgModule({
    declarations: [
        StaffMemberComponent,
        StudentListComponent,
        AttendanceReportComponent,
        LoginReportComponent
    ],
    imports: [
        CommonModule,
        MasterRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        DialogModule,
        MenuModule,
        TableComponent,
        SidebarModule,
        CalendarModule,
        DropdownModule,
        MessagesModule
    ],
    providers: [MessageService,MasterService]
})
export class MasterModule { }
