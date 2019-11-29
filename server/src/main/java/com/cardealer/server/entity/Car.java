package com.cardealer.server.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class Car {

    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
