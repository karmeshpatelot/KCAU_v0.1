import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@admin/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
})

export class OtpComponent implements OnInit{

    lognUser : FormGroup<object> | any;
    erNoData : any;
    isLogin  : any;

    constructor(public authService : AuthService, public route : Router, private toastr: ToastrService,) { }

    ngOnInit(): void {
      /// LOGIN FORM DETAILS ///
      this.lognUser = new FormGroup({
        otp : new FormControl('',Validators.required),
      })
    }
  
    ////  CHECK USER LOGIN INFO
    loginCheck(){
      let er_no = localStorage.getItem('er_no');
      let otp = this.lognUser.value.otp; 
     
      this.authService.otpVerifyCation(er_no,otp).subscribe((res) => {  
        this.erNoData = res;
        if(this.erNoData.status){
            this.isLogin = true;
            this.route.navigate(['/']);
            this.toastr.success('Welcome KCAU BoiTrack');
        }else{
            this.isLogin = false;
            this.toastr.error('Please Enter valid OTP');
          }
      },(err) => {
        this.toastr.error('Please Enter valid OTP');
      });
    }    
}
