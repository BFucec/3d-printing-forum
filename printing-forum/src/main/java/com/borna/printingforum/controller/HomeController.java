package com.borna.printingforum.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/homepage")
    public String home(){
        return "This is Home Page";
    }

    @GetMapping("/forbidden")
    public String forbidden(){
        return "This page is forbidden";
    }

    @GetMapping("/allPosts")
    public String admin(){
        return "This is All Posts Page";
    }

    @GetMapping("/failed")
    public String failed(){
        return "Login failed";
    }
}
