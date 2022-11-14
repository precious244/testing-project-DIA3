import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginModel } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  data: any;

  loginModel = new LoginModel()

  constructor(
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {

  }

  checkValidation() {
    // alert(this.formGroupLogin.controls['jobseekerEmail'].valid);
    // alert(this.formGroupLogin.controls['jobseekerPassword'].valid);
  }

  onLogin() {
    this.loginService.postLogin(this.loginModel.formGroupLogin.value).subscribe(
      (response) => {
        // this.data = response;
        // localStorage.setItem('id_token', this.data.token);
        // this.router.navigate(['job-find'])
        this.authService.saveUserData(response.data.registerJobseekerDTO)
        this.router.navigate(['admin/job-find'])
      },
      (error) => {
        this.loginModel.responseLogin = error.error;
      }
    )
  }
  // onLogin() {
  //   const data = this.formGroupLogin.value;
  //   if (data.jobseekerEmail && data.jobseekerPassword) {
  //     this.loginService.postLogin(data).subscribe(
  //       (response) => {
  //         this.data = response;
  //         localStorage.setItem('id_token', this.data.token);
  //         this.router.navigate(['job-find'])
  //       },
  //       (error) => {
  //         alert(error.error.message);
  //       }
  //     )
  //   } else {
  //     alert("error");
  //   }
  // }
}
