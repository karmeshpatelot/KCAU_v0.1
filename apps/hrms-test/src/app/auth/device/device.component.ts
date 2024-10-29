import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@admin/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
})

export class DeviceComponent implements OnInit{

    lognUser : FormGroup<object> | any;
    erNoData : any;
    isLogin  : any;

    constructor(public authService : AuthService, public route : Router, private toastr: ToastrService) { }

    ngOnInit(): void {
      /// LOGIN FORM DETAILS ///
      this.lognUser = new FormGroup({
        name   : new FormControl('',Validators.required),
        number : new FormControl('',Validators.required),
        campus : new FormControl('',Validators.required),
      })
    }
  
    ////  CHECK USER LOGIN INFO
    loginCheck(){

      localStorage.setItem('divice',JSON.stringify(this.lognUser.value));
      localStorage.setItem('deviceNo',this.lognUser.value.number)
      
      let device = localStorage.getItem('deviceNo');
      if(device){
        this.toastr.success('Device registration successfully');
        this.route.navigate(['auth/login'])
      }
    }    
}
