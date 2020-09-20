import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _requestService: RequestService
  ) { }

  ngOnInit() {
    this.formBuild();
  }

  formBuild(){
    this.loginForm = this.fb.group({
      mobileNo : ['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      password : ['',[Validators.required, Validators.minLength(8)]],
    });
  }

}
