package com.cardealer.server.services;

import com.cardealer.server.models.Car;
import com.cardealer.server.models.CarUpdatePayload;
import com.cardealer.server.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

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

    public Optional<Car> updateCarById(String id, CarUpdatePayload carUpdatePayload) {
        return carRepository.updateCarById(id, carUpdatePayload);
    }

    public Optional<Car> getCarById(String id) {
        return carRepository.getCarById(id);
    }

    public Optional<Car> deleteCarById(String id) {
        return carRepository.deleteCarById(id);
    }
}
