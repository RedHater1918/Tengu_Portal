package com.tengu.services;

import com.tengu.models.Exercise;
import com.tengu.models.ExerciseComplete;
import com.tengu.models.projections.ExerciseProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.repositories.ExerciseCompleteRepository;
import com.tengu.repositories.ExerciseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private ExerciseRepository exerciseRepository;
    private ExerciseCompleteRepository exerciseCompleteRepository;

    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, ExerciseCompleteRepository exerciseCompleteRepository){
        this.exerciseRepository = exerciseRepository;
        this.exerciseCompleteRepository = exerciseCompleteRepository;
    }

    @Override
    public Iterable<ExerciseProjection> findAll() {
        Iterable<ExerciseProjection> r = this.exerciseRepository.findAllProjected();
        return r;
    }


    @Transactional
    @Override
    public Optional<Exercise> findById(UUID id) {
        return this.exerciseRepository.findById(id);
    }

    @Override
    public void deleteEx(UUID userId, UUID exerciseId) {
        ExerciseComplete exerciseComplete = findByUserAndExercise(userId, exerciseId);
        this.exerciseCompleteRepository.delete(exerciseComplete);
    }

    @Transactional
    @Override
    public Iterable<ExerciseProjection> findByStatus(UUID userId, String status) {
        return this.exerciseCompleteRepository.findByStatus(userId,ExerciseComplete.Status.getById(status));
    }

    @Override
    public ExerciseComplete findByUserAndExercise(UUID userId, UUID exerciseId) {
        return this.exerciseCompleteRepository.findByUserAndExerciseId(userId, exerciseId);
    }

    @Override
    public Exercise save(Exercise exercise) {
        return this.exerciseRepository.save(exercise);
    }

    @Override
    public ExerciseComplete saveCompleted(ExerciseComplete exerciseComplete) {
        return this.exerciseCompleteRepository.save(exerciseComplete);
    }
}
