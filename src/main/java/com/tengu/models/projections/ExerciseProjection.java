package com.tengu.models.projections;

import java.time.LocalDate;
import java.util.UUID;

public interface ExerciseProjection {
    UUID getId();
    String getName();
    int getPrice();
    //String getDescription();
}
