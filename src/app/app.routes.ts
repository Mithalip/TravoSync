import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { UserLoginComponent } from './main/user-login/user-login.component';
import { AdminRegisterComponent } from './main/admin-register/admin-register.component';
import { UserRegisterComponent } from './main/user-register/user-register.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DashboardBookingComponent } from './pages/dashboard-booking/dashboard-booking.component';
import { DashboardTourPackageComponent } from './pages/dashboard-tour-package/dashboard-tour-package.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about_us",component:AboutUsComponent},
    {path:"packages",component:PackagesComponent},
    {path:"dashboard_booking",component:DashboardBookingComponent},
    {path:"dashboard_tourPackage",component:DashboardTourPackageComponent},
    {path:"admin-page",component:AdminPageComponent},
     {path:"admin_login",component:AdminLoginComponent},
    {path:"user_login",component:UserLoginComponent},
    {path:"admin_register",component:AdminRegisterComponent},
    {path:"user_register",component:UserRegisterComponent},
    { path: '', redirectTo: '/user_login', pathMatch: 'full' }
    

];
