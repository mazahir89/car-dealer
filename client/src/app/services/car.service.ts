import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { CARS_API, getCarByIdAPI, updateCarApi, deleteCarByIdAPI, addCarApi } from './../api-constants';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {

    return this.http.get(CARS_API);
  }

  getCarById(carId: string): Observable<any> {
    return this.http.get(getCarByIdAPI + carId);
  }

  save(carId: string, car: any): Observable<any> {
    let result: Observable<any>;
    if (car) {
      result = this.http.put(updateCarApi + carId, car);
    } else {
      alert("Something is wrong!")
    }
    return result;
  }
  
  addCar(car: any): Observable<any> {
   return this.http.post(addCarApi, car);
  }

  remove(carId: string) {
    return this.http.delete(deleteCarByIdAPI + carId);
  }
  
}
