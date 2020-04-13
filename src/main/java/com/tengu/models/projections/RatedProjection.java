package com.tengu.models.projections;

import com.tengu.models.User;
import org.springframework.lang.Nullable;

import java.time.LocalDate;
import java.util.UUID;

public interface RatedProjection {
    UUID getId();
    String getTitle();
    User getAuthor();
    float getRating();
    int getPrice();
    boolean getPurchased();
    LocalDate getCreatedDate();
}
