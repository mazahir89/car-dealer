import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CarService } from "./../../services/car.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-car",
  templateUrl: "./add-car.component.html",
  styleUrls: ["./add-car.component.css"]
})
export class AddCarComponent implements OnInit {
  car: any = {};
  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit() {}

  gotoList() {
    this.router.navigate(["/car-list"]);
  }

  add(form: NgForm) {
    this.carService.addCar(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}
