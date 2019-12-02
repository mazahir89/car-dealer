import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { CARS_API } from './../api-constants';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {

    return this.http.get(CARS_API);
  }

  
}
