import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from '@admin/secure/notfound/notfound.component'
import { AppLayoutComponent } from "@admin/layout/app.layout.component";
import { authGuard } from '@admin/core/guards/auth/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LicComponent } from './secure/lic/lic.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('@admin/secure/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
                    { path: 'master', loadChildren: () => import('@admin/secure/master/master.module').then(m => m.MasterModule), canActivate: [authGuard] }
                ]
            },
            { path: 'auth', loadChildren: () => import('@admin/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'lic', component: LicComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: true })
    ],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {
}
