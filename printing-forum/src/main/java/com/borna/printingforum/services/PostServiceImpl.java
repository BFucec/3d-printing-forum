package com.borna.printingforum.services;

import com.borna.printingforum.entity.PostEntity;
import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.Post;
import com.borna.printingforum.repository.PostRepository;
import com.borna.printingforum.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{

    private PostRepository postRepository;

    private UserRepository userRepository;

    public PostServiceImpl(PostRepository postRepository, UserRepository userRepository){
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Post createPost(Post post, String username) {
        UserEntity userEntity = userRepository.findByUsername(username);

        PostEntity postEntity = new PostEntity();
        BeanUtils.copyProperties(post, postEntity);
        postEntity.setUserEntity(userEntity);
        postRepository.save(postEntity);
        return post;
    }

    @Override
    public List<Post> getAllPosts() {
        List<PostEntity> postEntities = postRepository.findAll();
        List<Post> posts = postEntities
                .stream()
                .map(pos -> new Post(
                        pos.getId(),
                        pos.getPostTitle(),
                        pos.getPostDescription(),
                        pos.getPostImage(),
                        pos.getUserEntity().getUsername()))
                .collect(Collectors.toList());
        return posts;
    }

    @Override
    public boolean deletePost(Long id) {
        PostEntity post = postRepository.findById(id).get();
        postRepository.delete(post);
        return true;
    }

    public List<Post> getUserPostsById(Long id){
        List<PostEntity> postEntities = postRepository.findAllByUserId(id);
        List<Post> posts = postEntities
                .stream()
                .map(pos -> new Post(
                        pos.getId(),
                        pos.getPostTitle(),
                        pos.getPostDescription(),
                        pos.getPostImage(),
                        pos.getUserEntity().getUsername()))
                .collect(Collectors.toList());
        return posts;
    }

    @Override
    public Post getPostById(Long id) {
        PostEntity postEntity = postRepository.findById(id).get();
        Post post = new Post();
        BeanUtils.copyProperties(postEntity, post);

        return post;
    }

    @Override
    public Post editPost(Long id, Post post) {
        PostEntity postEntity = postRepository.findById(id).get();
        postEntity.setPostTitle(post.getPostTitle());
        postEntity.setPostDescription(post.getPostDescription());
        postEntity.setPostImage(post.getPostImage());
        postRepository.save(postEntity);
        return post;
    }


}
