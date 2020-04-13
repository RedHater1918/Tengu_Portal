package com.tengu.services;

import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;

import java.util.Optional;
import java.util.UUID;

public interface StoryService {
    Iterable<StoryProjection> findAll();
    Iterable<RatedProjection> findAllRated(UUID userId);
    Optional<Story> findById(UUID id);
    Story save(Story story);
}
