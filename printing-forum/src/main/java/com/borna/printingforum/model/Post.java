package com.borna.printingforum.model;
import com.borna.printingforum.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    private long id;

    private String postTitle;

    private String postDescription;

    private String postImage;

    private String username;
}
