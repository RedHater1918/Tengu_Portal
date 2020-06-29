package com.tengu.repositories;

import com.tengu.models.PriceRate;
import com.tengu.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PriceRateRepository extends CrudRepository<PriceRate, UUID> {

    @Query("SELECT r FROM PriceRate r where r.authorId=:authorId and r.storyId =:storyId")
    PriceRate findRate(@Param("authorId")UUID authorId,@Param("storyId") UUID storyId);

    @Query("SELECT avg(rate) from PriceRate where storyId=:storyId")
    double fingAVGPrice(@Param("storyId")UUID storyId);

}
