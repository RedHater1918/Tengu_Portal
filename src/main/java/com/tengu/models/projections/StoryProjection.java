package com.tengu.models.projections;

import com.tengu.models.User;

import java.time.LocalDate;
import java.util.UUID;

//@Projection(name = "noText", types = { Story.class })
public interface StoryProjection {
    UUID getId();
    String getTitle();
    User getAuthor();
    //float getRating();
    int getPrice();
    LocalDate getCreatedDate();
}
