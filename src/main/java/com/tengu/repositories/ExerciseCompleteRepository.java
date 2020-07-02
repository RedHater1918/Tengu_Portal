package com.tengu.repositories;

import com.tengu.models.ExerciseComplete;
import com.tengu.models.projections.ExerciseProjection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ExerciseCompleteRepository extends CrudRepository<ExerciseComplete, UUID> {

    @Query("SELECT s.exerciseId as id, " +
            "(select p.price from Exercise p where p.id = s.exerciseId) as price, " +
            "(select p.name from Exercise p where p.id = s.exerciseId) as name " +
            "from ExerciseComplete s where s.userId = :userId and s.status = :status")
    Iterable<ExerciseProjection> findByStatus(@Param("userId") UUID userId,@Param("status") ExerciseComplete.Status status);

    @Query("SELECT s from ExerciseComplete s where s.userId = :userId and s.exerciseId = :exerciseId")
    ExerciseComplete findByUserAndExerciseId(@Param("userId") UUID userId, @Param("exerciseId") UUID exerciseId);
}
