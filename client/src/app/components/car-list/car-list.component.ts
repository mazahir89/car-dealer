import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor(private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {

    this.getAllCars();
  }
  
  getAllCars() {
    return this.carService.getAllCars().subscribe(cars => {
      this.cars = cars;
      for(const car of this.cars) {
        this.giphyService.get(car.brand + " - " + car.model)
        .subscribe(url => car.giphyUrl = url);
      }
    });
  }

}
