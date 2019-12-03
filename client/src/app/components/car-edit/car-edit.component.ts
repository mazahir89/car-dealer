import { Component, OnInit, OnDestroy } from "@angular/core";
import { Car } from "src/app/models/Car";
import { CarService } from "src/app/services/car.service";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";

@Component({
  selector: "app-car-edit",
  templateUrl: "./car-edit.component.html",
  styleUrls: ["./car-edit.component.css"]
})
export class CarEditComponent implements OnInit, OnDestroy {
  selectedCar: Car;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      this.editCar(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  editCar(carId: string) {
    this.carService.getCarById(carId).subscribe(
      (car: Car) => {
        this.selectedCar = car;
      },
      error => {
        alert("Could not retrieve car with id: " + carId);
      }
    );
  }
}
