package com.tengu.services;

import com.tengu.models.Exercise;
import com.tengu.models.ExerciseComplete;
import com.tengu.models.projections.ExerciseProjection;

import java.util.Optional;
import java.util.UUID;

public interface ExerciseService {
    Iterable<ExerciseProjection> findAll();
    Optional<Exercise> findById(UUID id);
    Iterable<ExerciseProjection> findByStatus(UUID userId,String statusId);
    ExerciseComplete findByUserAndExercise(UUID userId,UUID exerciseId);
    Exercise save(Exercise exercise);
    ExerciseComplete saveCompleted(ExerciseComplete exerciseComplete);
}
