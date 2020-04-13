package com.tengu.repositories;

import com.tengu.models.Purchase;
import com.tengu.models.Rate;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RateRepository extends CrudRepository<Rate, UUID> {
    @Query(value = "select  new com.tengu.models.Rate( r.id, r.userId, r.storyId, r.value) " +
            "from Rate r where r.userId = :userId and r.storyId = :storyId")
    Rate findByStoryAndUser(@Param("storyId")UUID storyId, @Param("userId") UUID userId);
}
