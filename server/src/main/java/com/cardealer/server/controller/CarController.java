package com.cardealer.server.controller;

import com.cardealer.server.entity.Car;
import com.cardealer.server.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class CarController {

    @Autowired
    private CarService carService;


    @GetMapping("/cars")
    public Collection<Car> cars() {

        return carService.getCars()
                .stream()
                .filter(this::isCar)
                .collect(Collectors.toList());
    }

    public boolean isCar (Car car) {
        return !car.getBrand().equals("");
    }

    @PostMapping("/addCar")
    public Car postCar(@RequestBody Car car) {
        return carService.createCar(car);
    }

/*    @GetMapping(value = "/cars/{id}")
    public Optional<Car> getCarById(@PathVariable("id") int id) {

    }*/
}
