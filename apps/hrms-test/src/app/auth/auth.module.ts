import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '@admin/auth/auth-routing.module';
import { AuthService } from '@admin/core/services/auth.service';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DeviceComponent } from './device/device.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        SelectButtonModule,
        RadioButtonModule,
        ToastrModule.forRoot(), // ToastrModule added
    ],
    declarations:[LoginComponent,OtpComponent,DeviceComponent],
    providers:[AuthService,MessageService,ToastrService]
})
export class AuthModule { }
