import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  destinations = [
    { name: 'Paris', image: 'https://tse1.mm.bing.net/th?id=OIP.XA44fgaO5BqtSJNjX_muTAHaEK&pid=Api&P=0&h=220' },
    { name: 'Bali', image: 'https://wallpaperaccess.com/full/5672323.jpg' },
    { name: 'New York', image: 'https://wallpapercave.com/wp/wp3594901.jpg' },
    { name: 'Dubai', image: 'https://wallpaperaccess.com/full/1851187.jpg' }
  ];

  packages = [
    { title: 'Europe Explorer', price: 1200, duration: '7 Days', image: 'https://www.pixelstalk.net/wp-content/uploads/2016/11/HD-Free-Photos-Europe.jpg' },
    { title: 'Tropical Paradise', price: 850, duration: '5 Days', image: 'https://wallpaperaccess.com/full/3396585.jpg' }
  ];


}
