package com.cardealer.server.services;

import com.cardealer.server.entity.Car;
import com.cardealer.server.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public Collection<Car> getCars() {
        return carRepository.getCars();
    }

    public Car createCar(Car car) {
        return carRepository.createCar(car);
    }
}
