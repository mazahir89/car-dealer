import { Component, OnInit } from "@angular/core";
import { CarService } from "./../../services/car.service";
import { Car } from './../../models/Car';
import { AuthService } from 'src/app/services/login/auth.service';
import { UnsplashService } from 'src/app/services/unsplash.service';

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
    private unsplashService: UnsplashService
  ) {}

  ngOnInit() {
    this.getAllCars();
    this.isLoggedIn = this.authService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authService.logout();
  }
  getAllCars() {
    return this.carService.getAllCars().subscribe(cars => {
      this.cars = cars;
      for (const car of this.cars) {
        this.unsplashService
          .searchPhoto(car.brand + " - " + car.model)
          .subscribe(url => (car.unsplashUrl = url));
      }
    });
  }
}
