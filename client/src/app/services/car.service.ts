import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { CARS_API, getCarByIdAPI } from './../api-constants';

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

  
}
