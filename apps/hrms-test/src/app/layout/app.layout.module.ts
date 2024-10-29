import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from '@admin/layout/app.menu.component';
import { AppMenuitemComponent } from '@admin/layout/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from '@admin/layout/app.topbar.component';
import { AppFooterComponent } from '@admin/layout/app.footer.component';
import { AppConfigModule } from '@admin/layout/config/config.module';
import { AppSidebarComponent } from "@admin/layout/app.sidebar.component";
import { AppLayoutComponent } from "@admin/layout/app.layout.component";
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { MasterService } from '@admin/core/services/master.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        BreadcrumbModule,
        DialogModule,
        SidebarModule,
        ReactiveFormsModule,ToastrModule.forRoot(), // ToastrModule added
    ],
    providers :[MasterService,ToastrService],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
