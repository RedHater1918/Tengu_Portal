package com.tengu.services;

import com.tengu.models.User;

import java.util.Optional;
import java.util.UUID;

public interface UserService {
    boolean canRegister(String nickName, String email);
    Optional<User> getUserByEmail(String email);
    Optional<User> findById(UUID id);
    User save(User user);
    Iterable<User> findAll();
}
