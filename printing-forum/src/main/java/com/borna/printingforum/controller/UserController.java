package com.borna.printingforum.controller;

import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.Post;
import com.borna.printingforum.model.User;
import com.borna.printingforum.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class UserController {

    @Autowired
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping("/addUser")
    public User createUser(@RequestBody User user){

            return userService.createUser(user);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = null;
        user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        boolean deleted = false;
        userService.deleteFromUsersRoles(id);
        deleted = userService.deleteUser(id);
        Map<String, Boolean> response = new HashMap();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

}
