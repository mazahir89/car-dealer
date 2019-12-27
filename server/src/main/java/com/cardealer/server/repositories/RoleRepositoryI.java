package com.cardealer.server.repositories;

import com.cardealer.server.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepositoryI extends MongoRepository<Role, String> {
    Role findByRole(String role);
}
