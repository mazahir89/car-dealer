package com.cardealer.server.controller;

import com.cardealer.server.bean.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("You are authenticated");
    }
}
