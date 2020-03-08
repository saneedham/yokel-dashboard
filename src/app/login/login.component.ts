import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: string;

  username = new FormControl("", Validators.required);

  @ViewChild('alert', { static: true }) alert: ElementRef;

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = fb.group({
      "name": this.username,
      "password": ["", Validators.required]
    });
   }

   onSubmitLogin() {     
     this.loginService
      .requestAuth(this.loginForm.value)
      .subscribe(
        resp => this.router.navigateByUrl("/dashboard"),
        error => this.handleHttpError(error)
      )
   }
    
  handleHttpError(error) {
    if (error.status == "401") {
      this.loginError = "Username or password incorrect. Please try again."
    } else {
      this.loginError = "An unknown error has occured.  If this error persists please contact the admin for this website."
    }

    this.openAlert();
  }
  openAlert() {
    this.alert.nativeElement.classList.add("show");
  }
  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
  ngOnInit() {
  }

}
