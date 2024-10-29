import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessComponent } from '@admin/auth/access/access.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AccessComponent }
    ])],
    exports: [RouterModule]
})
export class AccessRoutingModule { }
