package com.tengu.controllers;

import com.tengu.controllers.message.request.LoginForm;
import com.tengu.controllers.message.request.SignUpForm;
import com.tengu.controllers.message.response.JwtResponse;
import com.tengu.controllers.message.response.ResponseMessage;
import com.tengu.models.Purchase;
import com.tengu.models.Rate;
import com.tengu.models.Story;
import com.tengu.models.User;
import com.tengu.security.jwt.JwtProvider;
import com.tengu.services.OperationService;
import com.tengu.services.StoryService;
import com.tengu.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/operations")
public class OperationsController {

    private UserService userService;
    private OperationService operationService;
    private StoryService storyService;

    public OperationsController(UserService userService, OperationService operationService, StoryService storyService) {
        this.userService = userService;
        this.operationService = operationService;
        this.storyService = storyService;
    }

    @GetMapping("/buy/{userId}/{storyId}")
    public ResponseEntity<?> buy(@PathVariable UUID userId, @PathVariable UUID storyId) {
        User buyer = userService.findById(userId).get();
        Story story = storyService.findById(storyId).get();
        User author = story.getAuthor();
        if (buyer.getPoints() > story.getPrice()) {
            Purchase purchase = new Purchase(UUID.randomUUID(), userId, storyId, story.getPrice(), LocalDate.now());
            this.operationService.savePurchase(purchase);

            buyer.setPoints(buyer.getPoints() - story.getPrice());
            this.userService.save(buyer);

            author.setPoints(author.getPoints() + story.getPrice());
            this.userService.save(author);

            return new ResponseEntity<>(new ResponseMessage("Purchased successfully!"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("User has not enough points"), HttpStatus.FORBIDDEN);
        }
    }

    @Transactional
    @GetMapping("/rate/{userId}/{storyId}/{value}")
    public ResponseEntity<?> rate(@PathVariable UUID userId, @PathVariable UUID storyId, @PathVariable int value) {
        Rate rate = operationService.findByStoryAndUser(storyId, userId);
        if(rate == null){
            rate = new Rate(UUID.randomUUID(), userId, storyId, value);
        } else {
            rate.setValue(value);
        }
        this.operationService.saveRate(rate);


        return new ResponseEntity<>(new ResponseMessage("Rated successfully!"), HttpStatus.OK);
    }
}

