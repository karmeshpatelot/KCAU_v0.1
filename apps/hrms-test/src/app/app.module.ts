import { NgModule } from '@angular/core';
import { PathLocationStrategy, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from '@admin/secure/notfound/notfound.component';
import { ProductService } from '@admin/core/services/product.service';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { 
            provide: LocationStrategy, 
            useClass: HashLocationStrategy 
        },
            ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
