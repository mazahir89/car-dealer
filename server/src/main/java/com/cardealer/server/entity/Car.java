package com.cardealer.server.entity;

import lombok.NonNull;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Document(collection = "Car")
public class Car {

    @Id @GeneratedValue
    private String id;
    private @NonNull String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }
}
