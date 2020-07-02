package com.tengu.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
public class ExerciseComplete {

    public enum Status{
        DONE, TAKEN;
        public static Status getById(String id){
            for(Status e : values()) {
                if(e.name().equalsIgnoreCase(id)) return e;
            }
            return TAKEN;
        }
    };

    @Id
    @GeneratedValue
    private UUID id;
    private UUID exerciseId;
    private UUID userId;
    private Status status;
    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate createdDate;

    public ExerciseComplete(){
    }
    public ExerciseComplete(UUID id,UUID exerciseId, UUID userId, Status status, LocalDate createdDate){
        this.id=id;
        this.exerciseId = exerciseId;
        this.userId = userId;
        this.status = status;
        this.createdDate = createdDate;
    }
}
