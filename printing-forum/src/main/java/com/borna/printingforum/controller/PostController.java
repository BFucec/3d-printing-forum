package com.borna.printingforum.controller;

import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.Post;
import com.borna.printingforum.model.User;
import com.borna.printingforum.services.PostService;
import com.borna.printingforum.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class PostController {
    @Autowired
    private PostService postService;

    private UserService userService;

    public PostController(PostService postService, UserService userService){

        this.postService = postService;
        this.userService = userService;
    }

    @PostMapping("/createPost")
    public Post createPost(@RequestBody Post post, HttpServletRequest request){
        String username = request.getUserPrincipal().getName();

        return postService.createPost(post, username);
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts(){

        return postService.getAllPosts();
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePost(@PathVariable Long id){
        boolean deleted = false;
        deleted = postService.deletePost(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        Post post = null;
        post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    @GetMapping("/posts/userPosts")
    public List<Post> getUserPosts(HttpServletRequest request){
        String username = request.getUserPrincipal().getName();
        User user = userService.getUserByUsername(username);
        Long id = user.getId();
        return postService.getUserPostsById(id);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> editPost(@PathVariable Long id,
                                         @RequestBody Post post){
        post = postService.editPost(id, post);
        return ResponseEntity.ok(post);
    }
}
