package com.cardealer.server.repository;

import com.cardealer.server.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class CarRepository {

    @Autowired
    private CarRepositoryI carRepositoryI;

    public Collection<Car> getCars() {
        return carRepositoryI.findAll();
    }

    public Car createCar(Car car) {
        return carRepositoryI.insert(car);
    }
}
