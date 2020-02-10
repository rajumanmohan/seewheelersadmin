import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { APIService } from './../../shared/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  optForm: FormGroup;
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  changePw = false;
  showOtp = false;
  chnageForm: FormGroup;
  constructor(private apiService: APIService, private fb: FormBuilder, private toast: ToastrService, private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

    })
    this.optForm = this.fb.group({
      otp: ['', [Validators.required]]
    })
    this.chnageForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      newpassword: ['', Validators.required]

    })
  }
  get f() { return this.forgotForm.controls; }

  forgot() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    this.apiService.forgotPassword(this.forgotForm.value).subscribe(res => {
      if (res['status'] == 200) {
        this.toast.success(res['message'], "Success");
        this.showOtp = true;
      } else {
        this.toast.error(res['err_filed'], "error");

      }
    })
  }
  get f1() { return this.optForm.controls; }

  matchOtp() {
    this.submitted1 = true;
    if (this.optForm.invalid) {
      return;
    }
    this.optForm.value.email = this.forgotForm.value.email;
    this.apiService.matchOtp(this.optForm.value).subscribe(res => {
      if (res['status'] == 200) {
        this.toast.success(res['message'], "Success");
        this.changePw = true;
      } else {
        this.toast.error(res['err_filed'], "error");
      }
    })
  }
  get f2() { return this.chnageForm.controls; }

  changePassword() {
    this.submitted2 = true;
    if (this.chnageForm.invalid) {
      return;
    }
    this.apiService.changePassword(this.chnageForm.value).subscribe(res => {
      if (res['status'] == 200) {
        this.toast.success('Success', res['message']);
        this.chnageForm.reset();
        this.router.navigate(['/']);
      } else {
        this.toast.error('error', res['err_filed']);

      }

    })
  }

}
