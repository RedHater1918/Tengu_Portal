package com.tengu.services;

import com.tengu.models.PriceRate;
import com.tengu.models.Story;
import com.tengu.models.User;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.repositories.PriceRateRepository;
import com.tengu.repositories.StoryRepository;
import com.tengu.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class StoryServiceImpl implements StoryService {
    private StoryRepository storyRepository;
    private PriceRateRepository priceRateRepository;
    public StoryServiceImpl(StoryRepository storyRepository,PriceRateRepository priceRateRepository){
        this.storyRepository = storyRepository;
        this.priceRateRepository = priceRateRepository;
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

    @Override
    public PriceRate savePriceRate(PriceRate priceRate) {
        return priceRateRepository.save(priceRate);
    }

    @Override
    public PriceRate getPriceRate(UUID authorId, UUID storyId) {
        return this.priceRateRepository.findRate(authorId, storyId);
    }

    @Override
    public double avgStoryPrice(UUID storyId) {
        return this.priceRateRepository.fingAVGPrice(storyId);
    }

}
