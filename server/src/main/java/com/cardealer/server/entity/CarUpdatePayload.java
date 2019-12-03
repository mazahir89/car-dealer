package com.cardealer.server.entity;

public class CarUpdatePayload {

    private String brand;
    private  String model;
    private  int year;
    private  int km;
    private  String fuel;

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public int getKm() {
        return km;
    }

    public String getFuel() {
        return fuel;
    }
}
