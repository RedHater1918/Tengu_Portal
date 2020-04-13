package com.tengu.services;

import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.repositories.StoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class StoryServiceImpl implements StoryService {
    private StoryRepository storyRepository;

    public StoryServiceImpl(StoryRepository storyRepository){
        this.storyRepository = storyRepository;
    }

    @Override
    public Iterable<StoryProjection> findAll() {
        Iterable<StoryProjection> r = this.storyRepository.findAllProjected();
        return r;
    }

    @Override
    public Iterable<RatedProjection> findAllRated(UUID userId) {
        Iterable<RatedProjection> r = this.storyRepository.findAllRated(userId);
        return r;
    }

    @Transactional
    @Override
    public Optional<Story> findById(UUID id) {
        Optional<Story> s = this.storyRepository.findById(id);
        return s;
    }

    @Override
    public Story save(Story story) {
        return this.storyRepository.save(story);
    }
}
