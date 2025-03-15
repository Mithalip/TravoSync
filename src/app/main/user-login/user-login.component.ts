import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  

  userLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    if (this.userLoginForm.valid) {
      console.log('User Login Data:', this.userLoginForm.value);
    }
  }
  register() {
    this.router.navigate(['/user_register']);
  }

}
