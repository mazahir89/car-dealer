import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor(private carService: CarService) { }

  ngOnInit() {

    this.getAllCars();
  }
  
  getAllCars() {
    return this.carService.getAllCars().subscribe(cars => {
      this.cars = cars;
    })
  }

}
