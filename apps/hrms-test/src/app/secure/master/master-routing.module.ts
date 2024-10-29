import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaffMemberComponent } from './staff/staff-member.component';
import { StudentListComponent } from './student/student-list.component';
import { AttendanceReportComponent } from './report/attendance-report.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginReportComponent } from './report/login-report.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:"staff",
            component: StaffMemberComponent
        },
        {
            path:"student",
            component: StudentListComponent
        },
        {
            path:"report",
            component: AttendanceReportComponent
        },
        {
            path:"login-report",
            component: LoginReportComponent
        },
        { path: '**', redirectTo: '/notfound' }
    ])],    
    exports: [RouterModule]
})
export class MasterRoutingModule { }
