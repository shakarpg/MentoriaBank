package com.mentoriabank.controller;

import com.mentoriabank.model.User;
import com.mentoriabank.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public Map<String, Object> listAll() {
        Map<String, Object> user = new HashMap<>();
        user.put("id", 1L);
        user.put("name", "Devweekerson");

        Map<String, Object> account = new HashMap<>();
        account.put("id", 1L);
        account.put("number", "01.097954-4");
        account.put("agency", "2030");
        account.put("balance", 624.12);
        account.put("limit", 1000.00);
        user.put("account", account);

        Map<String, Object> card = new HashMap<>();
        card.put("id", 1L);
        card.put("number", "xxxx xxxx xxxx 1111");
        card.put("limit", 2000.00);
        user.put("card", card);

        return user;
    }
}
