package com.cardealer.server.repositories;

import com.cardealer.server.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepositoryI extends MongoRepository<User, String> {

    User findByEmail(String email);
}
