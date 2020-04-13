package com.tengu.services;

import com.tengu.models.User;
import com.tengu.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean canRegister(String nickName, String email) {
        if (userRepository.existsByUsername(nickName)) {
            return false;
        }
        if (userRepository.existsByEmail(email)) {
            return false;
        }
        return true;
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> findById(UUID id) {
        return userRepository.findById(id);
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    public Iterable<User> findAll(){
        return this.userRepository.findAll();
    }
}
/**/