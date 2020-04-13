package com.tengu.repositories;

import com.tengu.models.Story;
import com.tengu.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
    @Query("SELECT u FROM User u where u.email = :email")
    Optional<User> findByEmail(@Param("email")String email);

    @Query("select new java.lang.Boolean(count(*) > 0) from User u where u.nickName = :nickName")
    Boolean existsByUsername(@Param("nickName")String nickName);

    @Query("select new java.lang.Boolean(count(*) > 0) from User u where u.email = :email")
    Boolean existsByEmail(@Param("email")String email);
}
