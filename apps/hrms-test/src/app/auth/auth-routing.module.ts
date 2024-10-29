import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { DeviceComponent } from './device/device.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('@admin/auth/error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('@admin/auth/access/access.module').then(m => m.AccessModule) },
        { 
            path: 'login', 
            component : LoginComponent
         },
         { 
            path: 'otp', 
            component : OtpComponent
         },
         { 
            path: 'device', 
            component : DeviceComponent
         },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
