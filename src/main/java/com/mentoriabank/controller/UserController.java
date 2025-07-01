package com.mentoriabank.controller;

import com.mentoriabank.model.User;
import com.mentoriabank.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> listAll() {
        return service.findAll();
    }
}
