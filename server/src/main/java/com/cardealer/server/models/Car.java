package com.cardealer.server.models;

import lombok.NonNull;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Document(collection = "Car")
public class Car {

    @Id @GeneratedValue
    private String id;
    private @NonNull String brand;
    private @NonNull String model;
    private @NonNull int year;
    private @NonNull int km;
    private @NonNull String fuel;

    public String getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getKm() {
        return km;
    }

    public void setKm(int km) {
        this.km = km;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }
}
