import { Component, OnInit } from "@angular/core";
import { CarService } from "./../../services/car.service";
import { Car } from './../../models/Car';
import { AuthService } from 'src/app/services/login/auth.service';
import { UnsplashService } from 'src/app/services/unsplash.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  selectedCar: Car;
  isLoggedIn = false;


  constructor(
    private carService: CarService,
    private authService: AuthService,
    private unsplashService: UnsplashService,
    private router: Router
  ) {}

  async ngOnInit() {
    // this.isLoggedIn = this.authService.isUserLoggedIn();
    // console.log('menu ->' + this.isLoggedIn);
    
   this.getAllCars();
  }

  handleLogout() {
    this.authService.logout();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  getAllCars() {
    return this.carService.getAllCars().subscribe(cars => {
      this.cars = cars;
      for (const car of this.cars) {
        this.unsplashService
          .searchPhoto(car.brand + " - " + car.model)
          .subscribe(url => (car.unsplashUrl = url));
      }
    },
    err => {
      console.log(err);
    }
    );
  }
}
