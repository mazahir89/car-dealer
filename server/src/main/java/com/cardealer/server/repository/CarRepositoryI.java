package com.cardealer.server.repository;

import com.cardealer.server.entity.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface CarRepositoryI extends MongoRepository<Car, String> {

}
