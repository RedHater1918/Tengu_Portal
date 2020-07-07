package com.tengu.models.projections;

import java.time.LocalDate;
import java.util.UUID;

public interface ExerciseProjection {
    UUID getId();
    UUID getAuthorId();
    String getName();
    int getPrice();
    //String getDescription();
}
