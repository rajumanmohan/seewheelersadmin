import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { APIService } from './../../../shared/api.service';
import { Component, OnInit } from '@angular/core';
// import {Router}
// import {FormBuilder}
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;
  constructor(private apiService: APIService, private Fb: FormBuilder, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.LoginForm = this.Fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  get f() { return this.LoginForm.controls; }
  Login() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    // let params = {

    //   "email": "admin@gmail.com",

    //   "password": "Qwerty@123",
    //   "role": "admin"

    // }
    this.LoginForm.value.role = "admin";

    this.apiService.UserLogin(this.LoginForm.value).subscribe(res => {

      if (res["status"] == 200) {
        this.toast.success(res['message'], 'Success');

        this.router.navigate(['/']);

      } else {
        this.toast.error(res['err_field'], 'error');

      }


    })
  }
}
