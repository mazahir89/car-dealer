package com.cardealer.server.repository;

import com.cardealer.server.entity.Car;
import com.cardealer.server.entity.CarUpdatePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

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

    public Optional<Car> updateCarById(String id, CarUpdatePayload carUpdatePayload) {

        Optional<Car> car = carRepositoryI.findById(id);
        car.ifPresent(c -> c.setBrand(carUpdatePayload.getBrand()));
        car.ifPresent(c -> c.setModel(carUpdatePayload.getModel()));
        car.ifPresent(c -> c.setYear(carUpdatePayload.getYear()));
        car.ifPresent(c -> c.setKm(carUpdatePayload.getKm()));
        car.ifPresent(c -> c.setFuel(carUpdatePayload.getFuel()));

        car.ifPresent(c -> carRepositoryI.save(c));

        return car;
    }

    public Optional<Car> getCarById(String id) {
        return carRepositoryI.findById(id);
    }

    public Optional<Car> deleteCarById(String id) {
        Optional<Car> car = carRepositoryI.findById(id);
        car.ifPresent(c -> carRepositoryI.delete(c));
        return car;
    }
}
