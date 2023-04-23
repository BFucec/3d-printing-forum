package com.borna.printingforum.services;

import com.borna.printingforum.model.Post;

import java.util.List;

public interface PostService {
    Post createPost(Post post, String username);

    List<Post> getAllPosts();

    boolean deletePost(Long id);

    Post getPostById(Long id);

    Post editPost(Long id, Post post);

    List<Post> getUserPostsById(Long id);
}
