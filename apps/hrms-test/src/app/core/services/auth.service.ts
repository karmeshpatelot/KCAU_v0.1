import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/hrms-test/src/environments/environment';


@Injectable()
export class AuthService {
    
    apiBaseURL = environment.apiBaseURL;

    constructor(private http: HttpClient) { }

    checkErNo(er_no: any,type : any){
        let url = this.apiBaseURL+'Login?username='+er_no+'&type='+type
        return this.http.get(url);
    }

    otpVerifyCation(er_no : any,otp : any){
        let url = this.apiBaseURL+'OTPVarification?username='+er_no+'&OtpCode='+otp;
        return this.http.get(url);
    }
}
