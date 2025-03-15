import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginAdmin() {
    if (this.adminLoginForm.valid) {
      console.log('Admin Login Data:', this.adminLoginForm.value);
    }
  }

  register() {
    this.router.navigate(['/admin_register']);
  }
}
