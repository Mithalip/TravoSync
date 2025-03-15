import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  packageCategories: string[] = ["All", "Beach", "Mountains", "Historical", "Adventure"];

  packages = [
    { 
      title: "Bali Escape", place: "Bali", category: "Beach", duration: "5 Days", price: 1200, 
      image: "https://th.bing.com/th/id/OIP.nrk2LuIsSXAA_Z0NlcDl0AHaFj?w=1920&h=1440&rs=1&pid=ImgDetMain"
    },
    { 
      title: "Maldives Luxury", place: "Maldives", category: "Beach", duration: "4 Days", price: 1800, 
      image: "https://th.bing.com/th/id/OIP.Y2R5e3Uc9unqc0dQp9BZvQHaEK?w=3973&h=2235&rs=1&pid=ImgDetMain"
    },
    { 
      title: "Swiss Alps Adventure", place: "Switzerland", category: "Mountains", duration: "7 Days", price: 2500, 
      image: "https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg"
    },
    { 
      title: "Himalayan Trek", place: "Nepal", category: "Mountains", duration: "6 Days", price: 900, 
      image: "https://th.bing.com/th/id/OIP.OKYYcfpsW-DQef3ECSlLmQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain"
    },
    { 
      title: "Great Wall Experience", place: "China", category: "Historical", duration: "3 Days", price: 1100, 
      image: "https://th.bing.com/th/id/OIP.uqhnf3KtRGTuSWBy7RwpVAHaE9?w=1200&h=803&rs=1&pid=ImgDetMain"
    },
    { 
      title: "Machu Picchu Tour", place: "Peru", category: "Historical", duration: "5 Days", price: 1600, 
      image: "https://th.bing.com/th/id/OIP.7aaCOaxDsj0GgUDO2WQh2wHaFj?w=2016&h=1512&rs=1&pid=ImgDetMain"
    },
    { 
      title: "African Safari", place: "Kenya", category: "Adventure", duration: "7 Days", price: 3000, 
      image: "https://th.bing.com/th/id/OIP.SsMZmSu7jvCmZ4XdRkocrAHaE8?w=5184&h=3456&rs=1&pid=ImgDetMain"
    },
    { 
      title: "Amazon Rainforest", place: "Brazil", category: "Adventure", duration: "6 Days", price: 2200, 
      image: "https://th.bing.com/th/id/OIP.bKkmYwFVY-lIWh2Mk2tZgwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain"
    }
  ];

  filteredPackages = [...this.packages];

  filterPackages(category: string) {
    this.filteredPackages = category === "All" ? [...this.packages] : this.packages.filter(pkg => pkg.category === category);
  }


}
