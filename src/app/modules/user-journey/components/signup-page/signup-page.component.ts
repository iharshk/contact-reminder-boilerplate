import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestService } from 'src/app/shared/services/request.service';
import { environment } from 'src/environments/environment'
import { FormService } from 'src/app/shared/services/form.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  mobileNo: String;
  password: String;
  signupForm : FormGroup;
  invalid : boolean = false;
  otpSubmitted : boolean = false;
  error : any = [];
  pass_mismatch: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _requestService: RequestService,
    private _formService: FormService
  ) { }

  ngOnInit() {
    this.formBuild();
  }

  formBuild(){
    this.signupForm = this.fb.group({
      mobileNo : ['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      otp : ['',[Validators.required, Validators.minLength(4)]],
      password : ['',[Validators.required, Validators.minLength(8)]],
      confirm_password : ['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get form() {
    return this.signupForm.controls;
  }

  getOtp(){
    if(this.signupForm.get('mobileNo').valid){
      let slug = 'user/getotp';
      let param = {
        mobile: this.signupForm.value.mobileNo
      }
      this._requestService.get(environment.backendUrl + slug, param).subscribe((res:any) => {
        console.log(res)
        if(res && res.data){
          this.invalid = true;
          this.signupForm.patchValue({
            otp : res.data['OTP']
          })
        }
      }, err =>{
        console.log(err)
      });
    } else {
      this._formService.markFormGroupTouched(this.signupForm)
    }
  }

  createPass(){
    if(this.signupForm.get('mobileNo').valid && this.signupForm.get('otp').valid) {
      this.otpSubmitted = true;
    } else {
      this._formService.markFormGroupTouched(this.signupForm)
    }
  }

  onSubmit(){
    if(this.signupForm.valid) {
      if(this.signupForm.value.password === this.signupForm.value.confirm_password) {
        this.pass_mismatch = false;
        let slug = 'user/signup';
        let params = {
          mobile : this.signupForm.value.mobileNo,
          password : this.signupForm.value.confirm_password
        }
        this._requestService.post(environment.backendUrl + slug, params).subscribe((res: any) =>{
          console.log(res);
          if(res.data && res.data.sessionId){
            localStorage.setItem("access-token", res.data.sessionId);
          }
          
        }, err => {
          console.log(err)
        });
      } else {
          this.pass_mismatch = true;
      }
    } else{
      this._formService.markFormGroupTouched(this.signupForm)
    }
  }


  

}
