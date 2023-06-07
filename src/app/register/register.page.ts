import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  message: string = '';


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService, private router:Router ) {
    this.registerForm = this.formBuilder.group({
      pseudo: '',
      password: '',
      role: ''
    });
  }

  onSubmit() {
    const pseudo = (<string>this.registerForm.get('pseudo')?.value) || '';
    const password = (<string>this.registerForm.get('password')?.value) || '';
    const role = (<string>this.registerForm.get('role')?.value) || '';
    this.userService.userNew(pseudo, password, role).subscribe();
    console.log("ok");
    this.registerForm.reset();
    this.router.navigate(['/login']);



  }
}
