package com.tengu.repositories;

import com.tengu.models.Exercise;
import com.tengu.models.projections.ExerciseProjection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, UUID> {

    @Query("SELECT s.id as id," +
            "    s.name as name," +
            "    s.description as description," +
            "    s.price as price " +
            "FROM Exercise s")
    Iterable<ExerciseProjection> findAllProjected();
}
