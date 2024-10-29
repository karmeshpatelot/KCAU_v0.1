import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@admin/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit{
    loading : boolean = false;
    lognUser : FormGroup<object> | any;
    erNoData : any;
    isLogin  : boolean | undefined;
    stateOptions: any[] = [
      { label: 'Staff', value: 'staff' },
      { label: 'Student', value: 'student' },
      { label: 'Admin', value: 'admin' },
    ];
  deviceId: any;


    constructor(public authService : AuthService,
      public route : Router,
      private toastr: ToastrService
      ,private routes: ActivatedRoute,
      public messageService : MessageService) { }

    ngOnInit(): void {

       this.routes.queryParams.subscribe(res=> {
         localStorage.setItem('deviceId',res['id'])
       })

        /// LOGIN FORM DETAILS ///
        this.lognUser = new FormGroup({
          er_no : new FormControl('',Validators.required),
          type : new FormControl('',Validators.required),
        })
    }
  
    ////  CHECK USER LOGIN INFO
    loginCheck(){
      this.loading = true;

      let er_no = this.lognUser.value.er_no;
      let type  = this.lognUser.value.type.value
     
      this.authService.checkErNo(er_no,type).subscribe((res) => {  
        this.erNoData = res;
        if(this.erNoData.status){
            this.isLogin = true;
            localStorage.setItem('er_no',er_no);
            localStorage.setItem('type',type);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Branch Updated', life: 3000 });
            this.loading = false;
            this.route.navigate(['/auth/otp']);
        }else{
            this.isLogin = false;
            this.loading = false;
            this.toastr.error('Please Enter valid ER.NO');
        }
      },(err) => {
        this.loading = false;
        this.toastr.error('Please Enter valid ER.NO');
      });
    }
}
