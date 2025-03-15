import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {

  adminRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adminRegisterForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerAdmin() {
    if (this.adminRegisterForm.valid) {
      console.log('Admin Registration Data:', this.adminRegisterForm.value);
    }
  }

}
