package com.tengu.controllers;

import com.tengu.controllers.message.request.LoginForm;
import com.tengu.controllers.message.request.SignUpForm;
import com.tengu.controllers.message.response.JwtResponse;
import com.tengu.controllers.message.response.ResponseMessage;
import com.tengu.models.Purchase;
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

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/users")
public class UserController {

    private UserService userService;
    private OperationService operationService;
    private StoryService storyService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    public UserController(
            UserService userService,
            OperationService operationService,
            StoryService storyService
        ){
        this.userService = userService;
        this.operationService = operationService;
        this.storyService = storyService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<User> list(){
        return this.userService.findAll();
    }

    @PostMapping("/auth/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User userEntity = this.userService.getUserByEmail(loginRequest.getEmail()).get();
        userEntity.setLastLoginDate(LocalDate.now());
        this.userService.save(userEntity);

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if(!this.userService.canRegister(signUpRequest.getNickName(), signUpRequest.getEmail()))
            return new ResponseEntity<>(new ResponseMessage("Email / Nickname is already in use"),
                    HttpStatus.BAD_REQUEST);

        User user = new User(
                UUID.randomUUID(),
                User.Role.getById(signUpRequest.getRole()),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getNickName(),
                LocalDate.now(),
                null,
                100
        );
        this.userService.save(user);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<User> getUser(@PathVariable String email)
    {
        Optional<User> user = this.userService.getUserByEmail(email);
        return ResponseEntity.ok().body(user.get());
    }

    @GetMapping(value = {"/get/{id}"})
    public User findById(@PathVariable UUID id){
        return this.userService.findById(id).get();
    }

    @PostMapping("/save")
    public User saveStory(@RequestBody User user){
        user.setRegistrationDate(LocalDate.now());

        return this.userService.save(user);
    }

}
