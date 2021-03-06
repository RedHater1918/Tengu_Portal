package com.tengu.controllers;

import com.tengu.controllers.message.response.ResponseMessage;
import com.tengu.models.Exercise;
import com.tengu.models.ExerciseComplete;
import com.tengu.models.Story;
import com.tengu.models.User;
import com.tengu.models.projections.ExerciseProjection;
import com.tengu.services.ExerciseService;
import com.tengu.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/exercise")
public class ExerciseController {

    private ExerciseService exerciseService;
    private UserService userService;
    public ExerciseController(ExerciseService exerciseService, UserService userService){
        this.exerciseService = exerciseService;
        this.userService = userService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<ExerciseProjection> list(){
        return this.exerciseService.findAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Exercise> get(@PathVariable UUID id)
    {
        Optional<Exercise> exercise = this.exerciseService.findById(id);

        return ResponseEntity.ok()
                .body(exercise.get());
    }

    @PostMapping("/save")
    public Exercise save(@RequestBody Exercise exercise){
        if(exercise.getId()==null){
            return this.exerciseService.save(exercise);
        }else{
           Exercise ex1 = this.exerciseService.findById(exercise.getId()).get();
           if(!ex1.getAuthorId().equals(exercise.getAuthorId())){
               return null;
           }else{
            return this.exerciseService.save(exercise);
            }
        }
    }

    @GetMapping("/getByStat/{userId}/{status}")
    public Iterable<ExerciseProjection> getListStatus(@PathVariable UUID userId, @PathVariable String status){
        return this.exerciseService.findByStatus(userId, status);
    }

    @GetMapping("/save/exerciseComp/{userId}/{exerciseId}/{status}")
    public ResponseEntity<?> saveExerciseComp(@PathVariable UUID userId, @PathVariable UUID exerciseId, @PathVariable String status){
        ExerciseComplete exerciseComplete = exerciseService.findByUserAndExercise(userId, exerciseId);
        Exercise exercise = exerciseService.findById(exerciseId).get();
        User user = this.userService.findById(userId).get();
        if(exerciseComplete == null){
            exerciseComplete = new ExerciseComplete(
                    UUID.randomUUID(),
                    exerciseId,
                    userId,
                    ExerciseComplete.Status.getById(status),
                    LocalDate.now()
            );
        }else{
            exerciseComplete.setStatus(ExerciseComplete.Status.getById(status));
        }
        this.exerciseService.saveCompleted(exerciseComplete);
        if(exerciseComplete.getStatus()==ExerciseComplete.Status.getById("DONE")){
          user.setPoints(user.getPoints()+exercise.getPrice());
          this.userService.save(user);
        }
        return new ResponseEntity<>(new ResponseMessage("Successfully!"), HttpStatus.OK);
    }

    @GetMapping("/getStatOfEx/{userId}/{exerciseId}")
    public ExerciseComplete getStatus(@PathVariable UUID userId, @PathVariable UUID exerciseId){
        ExerciseComplete ex = this.exerciseService.findByUserAndExercise(userId, exerciseId);
       if(ex!=null){
           return new ExerciseComplete(
                   null,
                   null,
                   null,
                   ex.getStatus(),
                   null);
       }else{
           return new ExerciseComplete(
                   null,
                   null,
                   null,
                  ExerciseComplete.Status.NONE,
                   null);
       }
    }
    @DeleteMapping("/deleteEx/{userId}/{exerciseId}")
    public ResponseEntity<?> deleteEx(@PathVariable UUID userId, @PathVariable UUID exerciseId){
        this.exerciseService.deleteEx(userId, exerciseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
