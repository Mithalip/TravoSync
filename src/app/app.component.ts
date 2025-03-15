import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { AdminRegisterComponent } from './main/admin-register/admin-register.component';
import { UserLoginComponent } from './main/user-login/user-login.component';
import { UserRegisterComponent } from './main/user-register/user-register.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ContactComponent,AboutUsComponent,PackagesComponent,AdminPageComponent,AdminLoginComponent,AdminRegisterComponent,UserLoginComponent,UserRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TravoSync';
}
