package com.cardealer.server.repositories;

import com.cardealer.server.models.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface CarRepositoryI extends MongoRepository<Car, String> {

}
