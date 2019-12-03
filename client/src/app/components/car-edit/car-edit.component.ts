import { Component, OnInit, OnDestroy } from "@angular/core";
import { Car } from "./../../models/Car";
import { CarService } from "./../../services/car.service";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { GiphyService } from './../../services/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-car-edit",
  templateUrl: "./car-edit.component.html",
  styleUrls: ["./car-edit.component.css"]
})
export class CarEditComponent implements OnInit, OnDestroy {
  car: any = {};
  selectedCar: Car;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private giphyService: GiphyService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.carService.getCarById(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
            this.giphyService.get(car.brand).subscribe(url => car.giphyUrl = url);
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm) {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
    this.carService.save(id, form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  });
}
  remove(href) {
    this.carService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
