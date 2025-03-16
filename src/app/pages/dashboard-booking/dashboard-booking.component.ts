import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dashboard-booking',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './dashboard-booking.component.html',
  styleUrl: './dashboard-booking.component.css'
})
export class DashboardBookingComponent {

  p: number = 1;  // For pagination

bookingArray = [
    { id: 1, booking_date: '2025-03-10', number_of_person: 2, total_price: 5000, tour_package_id: 101, tourist_id: 201 },
    { id: 2, booking_date: '2025-03-12', number_of_person: 3, total_price: 7500, tour_package_id: 102, tourist_id: 202 }
    // Add more data dynamically from API
];

deleteBooking(id: number) {
    this.bookingArray = this.bookingArray.filter(booking => booking.id !== id);
}

updateBooking(id: number) {
    console.log("Update booking with ID:", id);
}


}
