import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '@admin/secure/dashboard/dashboard.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { DashboardsRoutingModule } from '@admin/secure/dashboard/dashboard-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MasterService } from '@admin/core/services/master.service';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { BadgeModule } from 'primeng/badge';
import { LibsComponent } from '@hrms/libs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ChartModule } from 'primeng/chart';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        ButtonModule,
        DashboardsRoutingModule,
        CalendarModule,
        TabViewModule,
        FullCalendarModule,
        DialogModule,
        OrderListModule,
        BadgeModule,
        LibsComponent,
        ChartModule,
        ToastrModule.forRoot(), // ToastrModule added
    ],
    declarations: [DashboardComponent],
    providers:[MasterService,ToastrService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
