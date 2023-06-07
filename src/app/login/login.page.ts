import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from   '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  loginForm: FormGroup;
  message: string = '';
  data : any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private userService: UserService,   private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      pseudo: '',
      password: ''
    });
  }
  onSubmit() {
    const pseudo = (<string>this.loginForm.get('pseudo')?.value) || '';
    const password = (<string>this.loginForm.get('password')?.value) || '';
    this.userService.login(pseudo, password).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        console.log("ok");
        this.loginForm.reset();
      },
      )
  }

}
