import { Component, OnInit } from "@angular/core";
import { CarService } from "./../../services/car.service";
import { GiphyService } from "./../../services/giphy.service";
import { Car } from './../../models/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

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
    private giphyService: GiphyService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
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
        this.giphyService
          .get(car.brand + " - " + car.model)
          .subscribe(url => (car.giphyUrl = url));
      }
    });
  }
}
