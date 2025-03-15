import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log("User Message:", this.contactForm);
    alert("Thank you for reaching out! We’ll get back to you soon.");
    this.contactForm = { name: '', email: '', message: '' }; // Reset form
  }

}
