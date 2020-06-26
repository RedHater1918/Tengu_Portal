package com.tengu.controllers;

import com.tengu.controllers.message.response.ResponseMessage;
import com.tengu.models.PriceRate;
import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.services.StoryService;
import com.tengu.services.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Clob;
import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/stories")
public class StoryController {

    private StoryService storyService;

    public StoryController(StoryService storyService){
        this.storyService = storyService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<StoryProjection> list(){
        return this.storyService.findAll();
    }

    @GetMapping(value = {"/{id}"})
    public Iterable<RatedProjection> ratedList(@PathVariable UUID id){
        return this.storyService.findAllRated(id);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Story> getStory(@PathVariable UUID id)
    {
        Optional<Story> story = this.storyService.findById(id);

        return ResponseEntity.ok()
                .body(story.get());
    }

    @PostMapping("/save")
    public Story saveStory(@RequestBody Story story){
        story.setCreatedDate(LocalDate.now());

        return this.storyService.save(story);
    }
    @GetMapping("/save/priceRate/{authorId}/{storyId}/{rateValue}")
    public ResponseEntity<?> saveValueRating(@PathVariable UUID authorId, @PathVariable UUID storyId, @PathVariable int rateValue){
        PriceRate priceRate = storyService.getPriceRate(authorId, storyId);
        if(priceRate == null){
            priceRate = new PriceRate
                    (UUID.randomUUID(),
                            authorId,
                            storyId,
                            rateValue);
        } else {
            priceRate.setRate(rateValue);

        }
        this.storyService.savePriceRate(priceRate);


        return new ResponseEntity<>(new ResponseMessage("Rated successfully!"), HttpStatus.OK);
    }


    @GetMapping("/get/rate/{storyId}")
    public int getValueRate(@PathVariable UUID storyId){
        int min = 0;
        int max = 0;
        int[] fibArray = new int[] {1, 2, 3, 5, 8, 13, 21, 34, 55};
        double rate = storyService.avgStoryPrice(storyId);
        for(int fib:fibArray){
            if(rate>fib){
               min = fib;
            }else if(fib>rate){
                max = fib;
            }else{
                return fib;
            }
        }
        if((rate-min)>(max-rate)){
            return  max;
        }else{
            return min;
        }
    }
}
