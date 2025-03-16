import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dashboard-tour-package',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './dashboard-tour-package.component.html',
  styleUrl: './dashboard-tour-package.component.css'
})
export class DashboardTourPackageComponent {

  p: number = 1;  // For pagination

tourPackageArray = [
    { 
        id: 1, 
        destination: 'Paris', 
        package_name: 'Romantic Getaway', 
        price: 1500, 
        duration: '5 Days', 
        admin_id: 101, 
        image_url: 'https://example.com/paris.jpg' 
    },
    { 
        id: 2, 
        destination: 'Bali', 
        package_name: 'Beach Paradise', 
        price: 1800, 
        duration: '7 Days', 
        admin_id: 102, 
        image_url: 'https://example.com/bali.jpg' 
    }
    // More data can be added dynamically from an API
];

deleteTourPackage(id: number) {
    this.tourPackageArray = this.tourPackageArray.filter(pkg => pkg.id !== id);
}

updateTourPackage(id: number) {
    console.log("Update tour package with ID:", id);
}


}
