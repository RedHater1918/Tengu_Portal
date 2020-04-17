package com.tengu.controllers;

import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import com.tengu.services.StoryService;
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

}
