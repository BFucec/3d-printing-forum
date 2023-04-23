package com.borna.printingforum.controller;

import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.LoginReq;
import com.borna.printingforum.model.Post;
import com.borna.printingforum.model.User;
import com.borna.printingforum.repository.UserRepository;
import com.borna.printingforum.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class AuthController {


    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    private UserRepository userRepository;
    @GetMapping("/index")
    public String homepage(){
        return "This is Homepage";
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(){
        return ResponseEntity.ok("Logged in successfully");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(){
        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/isAdmin")
    public ResponseEntity<String> isAdmin(HttpServletRequest request){
        String username = request.getUserPrincipal().getName();
        User user = userService.getUserByUsername(username);
        if (user.getRoles().get(0).getName().equals("ROLE_ADMIN"))
            return ResponseEntity.ok("ADMIN");
        else
            return ResponseEntity.ok("USER");
    }

    @GetMapping("/me")
    public User getCurrentUser(HttpServletRequest request){
        String username = request.getUserPrincipal().getName();
        return userService.getUserByUsername(username);
    }


}
