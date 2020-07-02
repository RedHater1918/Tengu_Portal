package com.tengu.services;

import com.tengu.models.PriceRate;
import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.repositories.PriceRateRepository;
import com.tengu.repositories.StoryRepository;
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
        return this.priceRateRepository.save(priceRate);
    }

    @Override
    public PriceRate getPriceRate(UUID authorId, UUID storyId) {
        return this.priceRateRepository.findRate(authorId, storyId);
    }

    @Override
    public int avgStoryPrice(UUID storyId) {
        double rate = this.priceRateRepository.fingAVGPrice(storyId);
        int min = 0;
        int max = 0;
        int[] fibArray = new int[] {1, 2, 3, 5, 8, 13, 21};
        for(int fib:fibArray){
            if(rate>fib){
                min = fib;
            }else if(fib>rate){
                max = fib;
                break;
            }else{
                return fib;
            }
        }
        if((rate-min)>(max-rate)){
            return  max;
        }else {
            return min;
        }
    }

}
